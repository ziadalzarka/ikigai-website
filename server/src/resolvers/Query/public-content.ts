import { PostOrderByInput } from '../../generated/prisma';
import { Context } from '../../utils';

export const publicContent = {
	feed(parent, args, ctx: Context, info) {
		return ctx.db.query.postsConnection({
			...args,
			orderBy: <PostOrderByInput>'updatedAt_DESC'
		}, info);
	},

	post(parent, { id }, ctx: Context, info) {
		return ctx.db.query.post({ where: { id } }, info);
	},

	variables(parent, { }, ctx: Context, info) {
		return ctx.db.query.variable({ where: { index: 0 } }, info);
	}
};
