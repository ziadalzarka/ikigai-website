import { ClientApplication } from '@app/redux/models/client-application.model';
import { Action } from '@ngrx/store';

export const LIST_CLIENT_APPLICATIONS = '[LIST] ClientApplications';
export const LIST_CLIENT_APPLICATIONS_SUCCESS = '[LIST] ClientApplications !SUCCESS';
export const LIST_CLIENT_APPLICATIONS_FAIL = '[LIST] ClientApplications !FAIL';

export class ListClientApplications implements Action {
	readonly type = LIST_CLIENT_APPLICATIONS;

	constructor() { }
}

export class ListClientApplicationsSuccess implements Action {
	readonly type = LIST_CLIENT_APPLICATIONS_SUCCESS;

	constructor(public payload: ClientApplication[]) { }
}

export class ListClientApplicationsFail implements Action {
	readonly type = LIST_CLIENT_APPLICATIONS_FAIL;

	constructor() { }
}

export const GET_CLIENT_APPLICATION = '[GET] ClientApplication';
export const GET_CLIENT_APPLICATION_SUCCESS = '[GET] ClientApplication !SUCCESS';
export const GET_CLIENT_APPLICATION_FAIL = '[GET] ClientApplication !FAIL';

export class GetClientApplication implements Action {
	readonly type = GET_CLIENT_APPLICATION;

	constructor(public payload: string) { }
}

export class GetClientApplicationSuccess implements Action {
	readonly type = GET_CLIENT_APPLICATION_SUCCESS;

	constructor(public payload: ClientApplication) { }
}

	export class GetClientApplicationFail implements Action {
	readonly type = GET_CLIENT_APPLICATION_FAIL;

	constructor() { }
}

export type All =
	ListClientApplications | ListClientApplicationsSuccess | ListClientApplicationsFail |
	GetClientApplication | GetClientApplicationSuccess | GetClientApplicationFail;
