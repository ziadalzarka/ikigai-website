import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../models/user.model';
import { loading, failed, idle } from 'utils/utils';

interface State {
	user: User;
	loading: boolean;
	failed: boolean;
}

const initialState = {
	loading: false,
	failed: false,
};

export function userReducer(state = initialState, action: UserActions.All) {
	switch (action.type) {

		case UserActions.LOGIN_USER:
			return { ...state, ...loading };
		case UserActions.LOGIN_USER_SUCCESS:
			return { user: { ...action.payload.user }, ...idle };
		case UserActions.LOGIN_USER_FAIL:
			return { ...state, ...failed };

		case UserActions.GET_USER_SUCCESS:
			return { user: { ...action.payload }, ...idle };

		default:
			return state;
	}
}

export const getUserState = createFeatureSelector<State>('user');

export const selectLoading = createSelector(getUserState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getUserState,
	(state: State) => state.failed);
