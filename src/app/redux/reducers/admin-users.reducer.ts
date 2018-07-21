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

		case AdminActions.ADD_USER:
			return { ...state, ...loading };
		case AdminActions.ADD_USER_SUCCESS:
			return { ...usersAdapter.addOne(action.payload, state), ...idle };
		case AdminActions.ADD_USER_FAIL:
			return { ...state, ...failed };

		case AdminActions.CHANGE_USER_PERMISSIONS:
			return { ...state, ...loading };
		case AdminActions.CHANGE_USER_PERMISSIONS_SUCCESS:
			return {
				...usersAdapter.updateOne({
					id: action.payload.id,
					changes: {
						permissions: action.payload.permissions
					}
				}, state), ...idle
			};
		case AdminActions.CHANGE_USER_PERMISSIONS_FAIL:
			return { ...state, ...failed };

		case AdminActions.DELETE_USER:
			return { ...state, ...loading };
		case AdminActions.DELETE_USER_SUCCESS:
			return { ...usersAdapter.removeOne(action.payload.id, state), ...idle };
		case AdminActions.DELETE_USER_FAIL:
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
