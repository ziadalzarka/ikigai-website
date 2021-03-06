import { getUserId, Context } from '../../utils';

export const me = {
	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx);
		return ctx.db.query.user({ where: { id } }, info);
	},
};
