import { Context } from '../../utils';

export const file = {
	file(parent, { id }, ctx: Context, info) {
		return ctx.db.query.file({ where: { id } }, info);
	},
};
