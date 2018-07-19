import { Action } from '@ngrx/store';
import { User } from '@app/redux/models/user.model';

export const LIST_USERS = '[LIST] Users';
export const LIST_USERS_SUCCESS = '[LIST] Users !SUCCESS';
export const LIST_USERS_FAIL = '[LIST] Users !FAIL';

export class ListUsers implements Action {
	readonly type = LIST_USERS;

	constructor() { }
}

export class ListUsersSuccess implements Action {
	readonly type = LIST_USERS_SUCCESS;

	constructor(public payload: User[]) { }
}

export class ListUsersFail implements Action {
	readonly type = LIST_USERS_FAIL;

	constructor() { }
}

export type All =
	ListUsers | ListUsersSuccess | ListUsersFail;
