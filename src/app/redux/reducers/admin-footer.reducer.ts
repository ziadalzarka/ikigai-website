import { FooterVariables } from '@app/redux/models/variables.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as FooterActions from '../actions/admin-footer.actions';
import { loading, failed, idle } from 'utils/utils';

interface State {
	variables: FooterVariables;
	loading: boolean;
	failed: boolean;
	success: boolean;
}

const initialState = {
	variables: {},
	loading: false,
	failed: false,
	success: false
};

export function footerReducer(state = initialState, action: FooterActions.All) {

	switch (action.type) {

		case FooterActions.GET_FOOTER_VARIABLES:
			return { ...state, ...loading };
		case FooterActions.GET_FOOTER_VARIABLES_SUCCESS:
			return { variables: action.payload, ...idle };
		case FooterActions.GET_FOOTER_VARIABLES_FAIL:
			return { ...state, ...failed };

		case FooterActions.UPDATE_FOOTER_VARIABLES:
			return { ...state, ...loading, success: false };
		case FooterActions.UPDATE_FOOTER_VARIABLES_SUCCESS:
			return { ...state, ...idle, success: true };
		case FooterActions.UPDATE_FOOTER_VARIABLES_FAIL:
			return { ...state, ...failed };

		default:
			return state;
	}
}

export const getFooterState = createFeatureSelector<State>('footer');

export const selectLoading = createSelector(getFooterState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getFooterState,
	(state: State) => state.failed);
export const selectVariables = createSelector(getFooterState,
	(state: State) => state.variables);
	export const selectSuccess = createSelector(getFooterState,
		(state: State) => state.success);