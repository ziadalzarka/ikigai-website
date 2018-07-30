import { Pipe, PipeTransform } from '@angular/core';
import { Coupon } from '@app/redux/models/coupon.model';
import { DiscountType } from '@app/redux/enums/discount-type.enum';

@Pipe({
	name: 'coupon'
})
export class CouponPipe implements PipeTransform {

	transform(value: Coupon): string {
		switch (value.discountType) {
			case DiscountType.Percentage:
				return `${value.value}% off`;
			case DiscountType.Fixed:
				return `${value.value} EGP off`;
			default:
				return '';
		}
	}

}
