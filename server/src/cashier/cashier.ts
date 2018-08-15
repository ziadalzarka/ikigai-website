import { Package } from './package.enum';
import { Coupon } from './coupon.model';
import { DiscountType } from './discount-type.enum';

export interface CashierPrices {
	post: number;
	videoMinute: number;
	photo: number;
	gif: number;
}

export interface CashierQuotas {
	postsPerMonth?: number;
	gifs?: number;
	videos?: number;
	photography?: number;
	videoMinutesCount?: number;
}

const defPackagesQuotas = {
	[Package.Light]: {
		postsPerMonth: 30,
		gifs: 1,
		videos: 0,
	},
	[Package.Pro]: {
		postsPerMonth: 60,
		gifs: 3,
		videos: 1,
	},
	[Package.Enterprise]: {
		postsPerMonth: 120,
		gifs: 5,
		videos: 3,
	},
	[Package.Custom]: {
		postsPerMonth: 0,
		gifs: 0,
		videos: 0,
	}
};

const defPrices = {
	post: 70,
	videoMinute: 1000,
	photo: 30,
	gif: 100,
};

export default class Cashier {
	constructor(
		public prices: CashierPrices = defPrices,
		public quotas: CashierQuotas = defPackagesQuotas) { }

	calculateTotalPrice(application, coupon = null) {
		const currentPrice = (this.calculateMonthlyPrice(application).value * application.dealMonths);
		return currentPrice - this.calculateDiscount(application, coupon, currentPrice).value;
	}

	calculatePrices(application) {
		const prices = this.calculateMonthlyPrice(application);

		prices.posts *= application.dealMonths;
		prices.videos *= application.dealMonths;
		prices.photography *= application.dealMonths;
		prices.gifs *= application.dealMonths;

		return prices;
	}

	calculateMonthlyPrice(cart: CashierQuotas) {

		const price = {
			posts: cart.postsPerMonth * this.prices.post,
			videos: cart.videos *
				cart.videoMinutesCount *
				this.prices.videoMinute,
			photography: cart.photography * this.prices.photo,
			gifs: cart.gifs * this.prices.gif,

			get value() {
				return this.posts + this.videos + this.photography + this.gifs;
			}
		};

		return price;
	}

	calculateDiscount(application, coupon: Coupon = null, currentPrice = null) {

		let packageDiscount = 0;
		let couponDiscount = 0;

		if (application.dealMonths > 12) {
			switch (application.package) {
				case Package.Pro:
					packageDiscount += 500 * application.dealMonths;
					break;
				case Package.Enterprise:
					packageDiscount += 1000 * application.dealMonths;
					break;
			}
		}

		if (coupon) {
			switch (coupon.discountType) {
				case DiscountType.Fixed:
					couponDiscount += coupon.value;
					break;
				case DiscountType.Percentage:
					if (currentPrice == null) {
						currentPrice =
							this.calculateMonthlyPrice(application).value * application.dealMonths;
					}
					couponDiscount += currentPrice * (coupon.value / 100);
					break;
			}
		}

		return {
			get value() {
				const discount = packageDiscount + couponDiscount;
				return discount;
			},
			package: packageDiscount,
			coupon: couponDiscount
		};
	}
}
