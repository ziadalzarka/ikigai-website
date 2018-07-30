import { Permissions } from './../../utils';
import * as shortid from 'shortid';
import { Context, verifyPermission } from '../../utils';

export const couponMutation = {

	async createCoupons(parent, { discountType, value, repeat }, ctx: Context, info) {
		const userId = await verifyPermission(ctx, Permissions.Coupons).catch(err => { throw err; });

		repeat = repeat || 1;
		const coupons = [];

		for (let i = 0; i < repeat; i++) {
			const coupon = await ctx.db.mutation.createCoupon({
				data: {
					discountType,
					value,
					author: {
						connect: { id: userId }
					},
					coupon: shortid.generate()
				}
			}, info);

			coupons.push(coupon);
		}

		return coupons;
	},

	async updateCoupon(parent, {
		id,
		value,
		discountType
	}, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Coupons).catch(err => { throw err; });
		return ctx.db.mutation.updateCoupon({ where: { id }, data: { value, discountType } }, info);
	},

	async deleteCoupon(parent, { id }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Coupons).catch(err => { throw err; });
		return ctx.db.mutation.deleteCoupon({ where: { id } }, info);
	},

};
