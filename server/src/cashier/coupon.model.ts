import { DiscountType } from './discount-type.enum';

export interface Coupon {
	id?: string;
	coupon?: string;
	value: number;
	discountType: DiscountType;
}
