import Cashier from '../../cashier/cashier';
import { Context } from '../../utils';
import { ClientApplication } from '../../generated/prisma';

function couponExists(coupon: string, ctx: Context): Promise<boolean> {
	return ctx.db.exists.Coupon({ coupon });
}

function linkCoupon(couponId: string, application: Promise<ClientApplication>, ctx: Context): void {
	application.then(({ id }) => {
		ctx.db.mutation.updateCoupon({
			where: {
				id: couponId
			},
			data: {
				usedIn: {
					connect: { id }
				}
			}
		}, `{ id }`);
	});
}

const cashier = new Cashier();

export const clientApplicationMutation = {
	async applyClient(parent, data, ctx: Context, info) {

		let { coupon } = data;
		const { dealPackage } = data;
		let couponId: any = coupon && await couponExists(coupon, ctx);

		let totalPrice = 0;

		if (couponId) {
			coupon = await ctx.db.query.coupon({
				where: {
					coupon
				}
			}, `{ id value discountType }`);
			couponId = coupon.id;
		}

		delete data.dealPackage;
		delete data.coupon;
		delete data.totalPrice;

		data.package = dealPackage;
		data.totalPrice = cashier.calculateTotalPrice(data, coupon);

		const application = ctx.db.mutation.createClientApplication({
			data: {
				...data,
				...couponId && {
					coupon: {
						connect: { id: couponId }
					}
				}
			}
		}, info);

		if (couponId) linkCoupon(couponId, application, ctx);

		return application;
	},
};
