import { Context } from '../../utils';

export const contactMutation = {
	async contact(parent, data, ctx: Context, info) {
		return ctx.db.mutation.createContactApplication({ data }, info);
	},
};
