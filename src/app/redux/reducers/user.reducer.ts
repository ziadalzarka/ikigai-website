import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../models/user.model';
import { loading, failed, idle } from 'utils/utils';

interface State {
	user: User;
	loading: boolean;
	failed: boolean;
	loginFailed: boolean;
	action: any;
}

const initialState = {
	user: {}, /* empty object so it doesn't cause errors while loading */
	loading: false,
	failed: false,
	loginFailed: false,
	action: null
};

export function userReducer(state = initialState, action: UserActions.All) {

	const resolve = (state) => {
		return { ...state, action };
	};

	switch (action.type) {

		case UserActions.LOGIN_USER:
			return resolve({ ...state, ...loading, loginFailed: false });
		case UserActions.LOGIN_USER_SUCCESS:
			return resolve({ user: { ...action.payload.user }, ...idle, loginFailed: false });
		case UserActions.LOGIN_USER_FAIL:
			return resolve({ ...state, ...idle, loginFailed: true });

		case UserActions.GET_USER:
			return resolve({ ...state, ...loading });
		case UserActions.GET_USER_SUCCESS:
			return resolve({ user: { ...action.payload }, ...idle });
		case UserActions.GET_USER_FAIL:
			return resolve({ ...state, ...failed });

		default:
			return state;
	}
}

export const getUserState = createFeatureSelector<State>('user');

export const selectLoading = createSelector(getUserState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getUserState,
	(state: State) => state.failed);
export const selectLoginFailed = createSelector(getUserState,
	(state: State) => state.loginFailed);
export const selectUser = createSelector(getUserState,
	(state: State) => state.user);
export const selectAction = createSelector(getUserState,
	(state: State) => state.action);
