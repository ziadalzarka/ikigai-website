import { getUserId, Context, Permissions, verifyPermission } from '../../utils';

export const postMutation = {
	async publish(parent, {
		title,
		body,
		thumbnailBody,
		thumbnailImageId,
		badgeColorClass,
		badge }, ctx: Context, info) {
		const userId = getUserId(ctx);
		return ctx.db.mutation.createPost(
			{
				data: {
					title,
					body,
					thumbnailBody,
					...badge && { badge },
					...badgeColorClass && { badgeColorClass },
					...thumbnailImageId && {
						thumbnailImage: {
							connect: { id: thumbnailImageId }
						}
					},
					author: {
						connect: { id: userId },
					},
				},
			},
			info
		);
	},

	async updatePost(parent, args, ctx: Context, info) {
		await verifyPermission(ctx, Permissions.Posts).catch(err => { throw err; });

		const { id, thumbnailImageId } = args;

		const postExists = await ctx.db.exists.Post({ id });
		if (!postExists) {
			throw new Error(`Post not found or you're not the author`);
		}

		let data: any = {};

		// delete empty entries
		for (const key in args) {
			if (args.hasOwnProperty(key)) {
				if (args[key] == null) {
					delete args[key];
				}
			}
		}

		// convert thumbnailImageId to connect
		if (thumbnailImageId) {
			data = {
				...args,
				...thumbnailImageId && {
					thumbnailImage: {
						connect: { id: thumbnailImageId }
					}
				},
			};
		} else {
			data = args;
		}

		// delete undefined input fields
		delete data.id;
		delete data.thumbnailImageId;

		// update post
		return ctx.db.mutation.updatePost({ data, where: { id } }, info);
	},

	async deletePost(parent, { id }, ctx: Context, info) {
		const userId = await verifyPermission(ctx, Permissions.Posts).catch(err => { throw err; });

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
