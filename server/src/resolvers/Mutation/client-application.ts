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
		totalPrice,
		coupon, }, ctx: Context, info) {

		coupon = await ctx.db.query.coupon({ where: { coupon } }, '{ id discountType value }');

		const application = ctx.db.mutation.createClientApplication(
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

		application.then(({ id }) => {
			ctx.db.mutation.updateCoupon({
				where: { id: coupon.id },
				data: {
					usedIn: {
						connect: { id }
					}
				}
			});
		});

		return application;
	},
};
