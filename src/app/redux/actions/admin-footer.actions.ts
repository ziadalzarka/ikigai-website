import { FooterVariables } from '@app/redux/models/variables.model';
import { Action } from '@ngrx/store';

export const GET_FOOTER_VARIABLES = '[GET] FooterVariables';
export const GET_FOOTER_VARIABLES_SUCCESS = '[GET] FooterVariables !SUCCESS';
export const GET_FOOTER_VARIABLES_FAIL = '[GET] FooterVariables !FAIL';

export class GetFooterVariables implements Action {
	readonly type = GET_FOOTER_VARIABLES;

	constructor() { }
}

export class GetFooterVariablesSuccess implements Action {
	readonly type = GET_FOOTER_VARIABLES_SUCCESS;

	constructor(public payload: FooterVariables) { }
}

export class GetFooterVariablesFail implements Action {
	readonly type = GET_FOOTER_VARIABLES_FAIL;

	constructor() { }
}

export const UPDATE_FOOTER_VARIABLES = '[UPDATE] FooterVariables';
export const UPDATE_FOOTER_VARIABLES_SUCCESS = '[UPDATE] FooterVariables !SUCCESS';
export const UPDATE_FOOTER_VARIABLES_FAIL = '[UPDATE] FooterVariables !FAIL';

export class UpdateFooterVariables implements Action {
	readonly type = UPDATE_FOOTER_VARIABLES;

	constructor(public payload: FooterVariables) { }
}

export class UpdateFooterVariablesSuccess implements Action {
	readonly type = UPDATE_FOOTER_VARIABLES_SUCCESS;

	constructor() { }
}

export class UpdateFooterVariablesFail implements Action {
	readonly type = UPDATE_FOOTER_VARIABLES_FAIL;

	constructor() { }
}

export type All =
	GetFooterVariables | GetFooterVariablesSuccess | GetFooterVariablesFail |
	UpdateFooterVariables | UpdateFooterVariablesSuccess | UpdateFooterVariablesFail;
