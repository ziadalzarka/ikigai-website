import { Coupon } from '@app/redux/models/coupon.model';
import { Action } from '@ngrx/store';

export const CREATE_COUPON = '[CREATE] Coupon';
export const CREATE_COUPON_SUCCESS = '[CREATE] Coupon !SUCCESS';
export const CREATE_COUPON_FAIL = '[CREATE] Coupon !FAIL';

export interface CreateCouponPayload {
	data: Coupon;
	repeat: number;
}

export class CreateCoupon implements Action {
	readonly type = CREATE_COUPON;

	constructor(public payload: CreateCouponPayload) { }
}

export class CreateCouponSuccess implements Action {
	readonly type = CREATE_COUPON_SUCCESS;

	constructor(public payload: Coupon[]) { }
}

export class CreateCouponFail implements Action {
	readonly type = CREATE_COUPON_FAIL;

	constructor() { }
}

export const LIST_COUPON = '[LIST] Coupon';
export const LIST_COUPON_SUCCESS = '[LIST] Coupon !SUCCESS';
export const LIST_COUPON_FAIL = '[LIST] Coupon !FAIL';

export class ListCoupon implements Action {
	readonly type = LIST_COUPON;

	constructor() { }
}

export class ListCouponSuccess implements Action {
	readonly type = LIST_COUPON_SUCCESS;

	constructor(public payload: Coupon[]) { }
}

export class ListCouponFail implements Action {
	readonly type = LIST_COUPON_FAIL;

	constructor() { }
}

export const DELETE_COUPON = '[DELETE] Coupon';
export const DELETE_COUPON_SUCCESS = '[DELETE] Coupon !SUCCESS';
export const DELETE_COUPON_FAIL = '[DELETE] Coupon !FAIL';

export class DeleteCoupon implements Action {
	readonly type = DELETE_COUPON;

	constructor(public payload: Coupon) { }
}

export class DeleteCouponSuccess implements Action {
	readonly type = DELETE_COUPON_SUCCESS;

	constructor(public payload: Coupon) { }
}

export class DeleteCouponFail implements Action {
	readonly type = DELETE_COUPON_FAIL;

	constructor() { }
}

export type All =
	CreateCoupon | CreateCouponSuccess | CreateCouponFail |
	ListCoupon | ListCouponSuccess | ListCouponFail |
	DeleteCoupon | DeleteCouponSuccess | DeleteCouponFail;
