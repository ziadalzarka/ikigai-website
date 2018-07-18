import { getUserId, Context } from '../../utils';

export const post = {
	async publish(parent, { title, body, thumbnailBody, thumbnailImageId }, ctx: Context, info) {
		const userId = getUserId(ctx);
		return ctx.db.mutation.createPost(
			{
				data: {
					title,
					body,
					thumbnailBody,
					thumbnailImage: {
						connect: { id: thumbnailImageId }
					},
					author: {
						connect: { id: userId },
					},
				},
			},
			info
		);
	},

	async deletePost(parent, { id }, ctx: Context, info) {
		const userId = getUserId(ctx);
		const postExists = await ctx.db.exists.Post({
			id,
			author: { id: userId },
		});
		if (!postExists) {
			throw new Error(`Post not found or you're not the author`);
		}

		return ctx.db.mutation.deletePost({ where: { id } });
	},
};
