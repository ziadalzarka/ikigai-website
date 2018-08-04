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

export const clientApplicationMutation = {
	async applyClient(parent, data, ctx: Context, info) {

		const { coupon, dealPackage } = data;
		let couponId: any = coupon && await couponExists(coupon, ctx);

		if (couponId) {
			couponId = (await ctx.db.query.coupon({
				where: {
					coupon
				}
			}, `{ id }`)).id;
		}

		delete data.dealPackage;
		delete data.coupon;

		const application = ctx.db.mutation.createClientApplication({
			data: {
				...data,
				package: dealPackage,
				...couponId && {
					coupon: {
						connect: { id: couponId }
					}
				}
			}
		}, info);

		linkCoupon(couponId, application, ctx);

		return application;
	},
};
