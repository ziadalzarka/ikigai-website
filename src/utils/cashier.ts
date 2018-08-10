import { Package } from '@app/redux/enums/package.enum';
import { Coupon } from '@app/redux/models/coupon.model';
import { DiscountType } from '@app/redux/enums/discount-type.enum';
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

export default class Cashier {
	constructor(private prices: CashierPrices, private quotas: CashierQuotas) { }

	calculateMonthlyPrice(cart: CashierQuotas) {
		let price = 0;

		price += cart.postsPerMonth * this.prices.post;
		price += cart.videos *
			cart.videoMinutesCount *
			this.prices.videoMinute;
		price += cart.photography * this.prices.photo;
		price += cart.gifs * this.prices.gif;

		return price;
	}

	calculateDiscount(application, coupon: Coupon = null, currentPrice = 0) {

		let discount = 0;

		if (application.dealYears > 1) {
			switch (application.package) {
				case Package.Pro:
					discount += 500 * application.dealYears * 12;
					break;
				case Package.Enterprise:
					discount += 1000 * application.dealYears * 12;
					break;
			}
		}

		if (coupon) {
			switch (coupon.discountType) {
				case DiscountType.Fixed:
					discount += coupon.value;
					break;
				case DiscountType.Percentage:
					discount += currentPrice * (coupon.value / 100);
					break;
			}
		}

		return discount;
	}
}
