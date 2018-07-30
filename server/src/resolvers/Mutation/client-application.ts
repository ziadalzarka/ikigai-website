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
		if (coupon) {
			const exists = await ctx.db.exists.Coupon({ coupon });
			if (exists) {
				const discount = await ctx.db.query.coupon({ where: { coupon } }, '{ discountType value }');
				switch (discount.discountType) {
					case 'Percentage':
						totalPrice -= totalPrice * (discount.value / 100);
						break;
					case 'Fixed':
						totalPrice -= discount.value;
						break;
				}
			}
		}
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
