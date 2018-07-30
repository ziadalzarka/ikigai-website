import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loading, failed, idle, success } from 'utils/utils';
import * as CouponsActions from '@app/redux/actions/coupons.actions';
import { Coupon } from '@app/redux/models/coupon.model';

export const couponsAdapter = createEntityAdapter<Coupon>();

export interface State extends EntityState<Coupon> {
	loading: boolean;
	failed: boolean;
}

export const initialState = couponsAdapter.getInitialState({
	...idle,
});

export function couponsReducer(
	state: State = initialState,
	action: CouponsActions.All) {

	switch (action.type) {

		case CouponsActions.LIST_COUPON:
			return { ...state, ...loading };
		case CouponsActions.LIST_COUPON_SUCCESS:
			return { ...couponsAdapter.addAll(action.payload, state), ...idle };
		case CouponsActions.LIST_COUPON_FAIL:
			return { ...state, ...failed };
		default:
			return state;
	}
}

export const getCouponsState = createFeatureSelector<State>('coupons');

export const selectLoading = createSelector(getCouponsState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getCouponsState,
	(state: State) => state.failed);

export const { selectAll } = couponsAdapter.getSelectors(getCouponsState);
