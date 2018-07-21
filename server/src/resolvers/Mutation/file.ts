import { getUserId, Context } from '../../utils';

export const fileMutation = {
	async createFileEntry(parent, { name, checksum }, ctx: Context, info) {
		return ctx.db.mutation.createFile({
			data: {
				name,
				checksum
			}
		}, info);
	},
};
