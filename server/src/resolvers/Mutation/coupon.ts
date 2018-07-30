import { Permissions } from './../../utils';
import * as shortid from 'shortid';
import { Context, verifyPermission } from '../../utils';

export const couponMutation = {

	async createCoupon(parent, data, ctx: Context, info) {
		const userId = await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		return ctx.db.mutation.createCoupon({ 
			data: {
				...data,
				author: {
					connect: { id: userId }
				},
				coupon: shortid.generate()
			}
		}, info);
	},

	async updateCoupon(parent, {
		id,
		value,
		discountType
	}, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		return ctx.db.mutation.updateCoupon({ where: { id }, data: { value, discountType } }, info);
	},

	async deleteCoupon(parent, { id }, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		return ctx.db.mutation.deleteCoupon({ where: { id } }, info);
	},

};
