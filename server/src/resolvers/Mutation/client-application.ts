import { Context } from '../../utils';

export const clientApplicationMutation = {
	async applyClient(parent, {
		name,
		email,
		address,
		phoneNumber,
		postsPerMonth,
		photography,
		facebook,
		gifs,
		videos,
		videoMinutesCount,
		website,
		hasHost,
		hasDomain,
		dealYears,
		dealPackage,
		totalPrice }, ctx: Context, info) {
		return ctx.db.mutation.createClientApplication(
			{
				data: {
					name,
					email,
					address,
					phoneNumber,
					postsPerMonth,
					facebook,
					photography,
					gifs,
					videos,
					videoMinutesCount,
					website,
					hasHost,
					hasDomain,
					dealYears,
					totalPrice,
					package: dealPackage,
				},
			},
			info
		);
	},
};
