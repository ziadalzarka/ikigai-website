import { getUserId, Context } from '../utils';

export const Query = {
	feed(parent, args, ctx: Context, info) {
		return ctx.db.query.posts({}, info);
	},

	drafts(parent, args, ctx: Context, info) {
		const id = getUserId(ctx);

		const where = {
			author: {
				id
			}
		};

		return ctx.db.query.posts({ where }, info);
	},

	post(parent, { id }, ctx: Context, info) {
		return ctx.db.query.post({ where: { id } }, info);
	},

	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx)
		return ctx.db.query.user({ where: { id } }, info);
	},
};
