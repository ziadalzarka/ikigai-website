import { Coupon } from './coupon.model';
import { Package } from '@app/redux/enums/package.enum';

export interface ClientApplication {
	id: string;
	name: string;
	phoneNumber: string;
	email: string;
	facebook: string;
	address: string;
	postsPerMonth: number;
	photography: number;
	gifs: number;
	videos: number;
	videoMinutesCount: number;
	website: boolean;
	hasHost: boolean;
	hasDomain: boolean;
	dealMonths: number;
	coupon: Coupon;
	package: Package;
	totalPrice: number;
}
