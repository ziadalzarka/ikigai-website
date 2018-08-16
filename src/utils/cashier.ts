import { Package } from 'app/redux/enums/package.enum';
import { Coupon } from 'app/redux/models/coupon.model';
import { DiscountType } from 'app/redux/enums/discount-type.enum';
export interface CashierPrices {
	post: number;
	videoMinute: number;
	photo: number;
	gif: number;
	discountAfterMonths: number;
	light_discountPerMonth: number;
	pro_discountPerMonth: number;
	enterprise_discountPerMonth: number;
}

export interface CashierQuotas {
	postsPerMonth?: number;
	gifs?: number;
	videos?: number;
	photography?: number;
	videoMinutesCount?: number;
}

export function getPackagesQuotas(settings) {
	return {
		[Package.Light]: {
			postsPerMonth: settings.light_postsPerMonth,
			gifs: settings.light_gifs,
			videos: settings.light_videos,
			photography: settings.light_photography,
		},
		[Package.Pro]: {
			postsPerMonth: settings.pro_postsPerMonth,
			gifs: settings.pro_gifs,
			videos: settings.pro_videos,
			photography: settings.pro_photography,
		},
		[Package.Enterprise]: {
			postsPerMonth: settings.enterprise_postsPerMonth,
			gifs: settings.enterprise_gifs,
			videos: settings.enterprise_videos,
			photography: settings.enterprise_photography,
		},
		[Package.Custom]: {
			postsPerMonth: 0,
			gifs: 0,
			videos: 0,
			photography: 0,
		}
	};
}

const defPackagesQuotas = {
	[Package.Light]: {
		postsPerMonth: 30,
		gifs: 0,
		videos: 0,
		photography: 0,
	},
	[Package.Pro]: {
		postsPerMonth: 60,
		gifs: 0,
		videos: 0,
		photography: 0,
	},
	[Package.Enterprise]: {
		postsPerMonth: 120,
		gifs: 0,
		videos: 0,
		photography: 0,
	},
	[Package.Custom]: {
		postsPerMonth: 0,
		gifs: 0,
		videos: 0,
		photography: 0,
	}
};

const defPrices = {
	post: 70,
	videoMinute: 1000,
	photo: 30,
	gif: 100,
	discountAfterMonths: 12,
	light_discountPerMonth: 0,
	pro_discountPerMonth: 500,
	enterprise_discountPerMonth: 1000,
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

		if (application.dealMonths > this.prices.discountAfterMonths) {
			switch (application.package) {
				case Package.Light:
					packageDiscount += this.prices.light_discountPerMonth * application.dealMonths;
					break;
				case Package.Pro:
					packageDiscount += this.prices.pro_discountPerMonth * application.dealMonths;
					break;
				case Package.Enterprise:
					packageDiscount += this.prices.enterprise_discountPerMonth * application.dealMonths;
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
