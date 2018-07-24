import { Package } from './../enums/package.enum';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as ClientApplicationsActions from '@app/redux/actions/client-applications.actions';
import { loading, failed, idle } from 'utils/utils';
import { ClientApplication } from '@app/redux/models/client-application.model';

export const clientApplicationsAdapter = createEntityAdapter<ClientApplication>();

export interface State extends EntityState<ClientApplication> {
	selectedApplication: ClientApplication;
	loading: boolean;
	failed: boolean;
}

export const initialState = clientApplicationsAdapter.getInitialState({
	selectedApplication: null,
	loading: false,
	failed: false
});

export function clientApplicationsReducer(
	state: State = initialState,
	action: ClientApplicationsActions.All) {

	switch (action.type) {

		case ClientApplicationsActions.LIST_CLIENT_APPLICATIONS:
			return { ...state, ...loading };
		case ClientApplicationsActions.LIST_CLIENT_APPLICATIONS_SUCCESS:
			const packageIndexes = {
				[Package.Light]: 0,
				[Package.Pro]: 1,
				[Package.Enterprise]: 2,
				[Package.Custom]: 3
			};
			return {
				...clientApplicationsAdapter
					.addAll(
						action.payload.map(app => {
							return {
								...app,
								packageIndex: packageIndexes[app.package.toString()]
							};
						}),
						state),
				...idle
			};
		case ClientApplicationsActions.LIST_CLIENT_APPLICATIONS_FAIL:
			return { ...state, ...failed };

		case ClientApplicationsActions.GET_CLIENT_APPLICATION:
			return { ...state, selectedApplication: null, ...loading };
		case ClientApplicationsActions.GET_CLIENT_APPLICATION_SUCCESS:
			return { ...state, selectedApplication: action.payload, ...idle };
		case ClientApplicationsActions.GET_CLIENT_APPLICATION:
			return { ...state, ...failed };

		default:
			return state;
	}
}

export const getClientApplicationsState = createFeatureSelector<State>('clientApplications');

export const selectLoading = createSelector(getClientApplicationsState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getClientApplicationsState,
	(state: State) => state.failed);
export const selectedApplication = createSelector(getClientApplicationsState,
	(state: State) => state.selectedApplication);
export const { selectAll } = clientApplicationsAdapter.getSelectors(getClientApplicationsState);
