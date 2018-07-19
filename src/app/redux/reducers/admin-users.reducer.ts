import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AdminActions from '@app/redux/actions/admin-users.actions';
import { User } from '@app/redux/models/user.model';
import { loading, failed, idle } from 'utils/utils';

export const usersAdapter = createEntityAdapter<User>();

export interface State extends EntityState<User> {
	loading: boolean;
	failed: boolean;
}

export const initialState = usersAdapter.getInitialState({
	loading: false,
	failed: false
});

export function adminUsersReducer(state: State = initialState, action: AdminActions.All) {

	switch (action.type) {

		case AdminActions.LIST_USERS:
			return { ...state, ...loading };
		case AdminActions.LIST_USERS_SUCCESS:
			return { ...usersAdapter.addAll(action.payload, state), ...idle };
		case AdminActions.LIST_USERS_FAIL:
			return { ...state, ...failed };

		default:
			return state;
	}
}

export const getAdminState = createFeatureSelector<State>('adminUsers');

export const selectLoading = createSelector(getAdminState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getAdminState,
	(state: State) => state.failed);
export const { selectAll } = usersAdapter.getSelectors(getAdminState);
