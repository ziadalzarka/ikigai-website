import { getUserId, Context, verifyPermission, Permissions } from '../../utils';

export const couponQuery = {
	async couponsConnection(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Admin).catch(err => { throw err; });
		return ctx.db.query.couponsConnection(args, info);
	},
};
