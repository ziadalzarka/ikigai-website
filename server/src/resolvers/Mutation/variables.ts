import { getUserId, Context } from '../../utils';

export const variablesMutation = {
	async createFileEntry(parent, { name, checksum }, ctx: Context, info) {
		return ctx.db.mutation.createFile({
			data: {
				name,
				checksum
			}
		}, info);
	},
};
