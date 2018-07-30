import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as CouponsActions from '@app/redux/actions/coupons.actions';
import { Coupon } from '@app/redux/models/coupon.model';
import {
	GraphqlCouponsService
} from '@app/dashboard/overview/applications/graphql-coupons.service';

export type Action = CouponsActions.All;

@Injectable()
export class CouponsEffects {
	constructor(
		private actions: Actions,
		private service: GraphqlCouponsService,
	) { }

	@Effect()
	createCoupon: Observable<Action> = this.actions
		.ofType<Action>(CouponsActions.CREATE_COUPON)
		.pipe(
			map((action: CouponsActions.CreateCoupon) => action.payload),
			mergeMap(payload =>
				this.service.createCoupons(payload.data, payload.repeat).pipe(
					map((res: Coupon[]) => new CouponsActions.CreateCouponSuccess(res)),
					catchError(() => of(new CouponsActions.CreateCouponFail()))
				)
			),
	);

	@Effect()
	listCoupons: Observable<Action> = this.actions
		.ofType<Action>(CouponsActions.LIST_COUPON)
		.pipe(
			mergeMap(_ =>
				this.service.listCoupons().pipe(
					map((res: Coupon[]) => new CouponsActions.ListCouponSuccess(res)),
					catchError(() => of(new CouponsActions.ListCouponFail()))
				)
			),
	);
}
