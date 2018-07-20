import { Action } from '@ngrx/store';
import { User } from '@app/redux/models/user.model';

export const ADD_USER = '[ADD] User';
export const ADD_USER_SUCCESS = '[ADD] User !SUCCESS';
export const ADD_USER_FAIL = '[ADD] User !FAIL';

export class AddUser implements Action {
	readonly type = ADD_USER;

	constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
	readonly type = ADD_USER_SUCCESS;

	constructor(public payload: User) { }
}

export class AddUserFail implements Action {
	readonly type = ADD_USER_FAIL;

	constructor() { }
}

export const DELETE_USER = '[DELETE] User';
export const DELETE_USER_SUCCESS = '[DELETE] User !SUCCESS';
export const DELETE_USER_FAIL = '[DELETE] User !FAIL';

export class DeleteUser implements Action {
	readonly type = DELETE_USER;

	constructor(public payload: string) { }
}

export class DeleteUserSuccess implements Action {
	readonly type = DELETE_USER_SUCCESS;

	constructor(public payload: User) { }
}

export class DeleteUserFail implements Action {
	readonly type = DELETE_USER_FAIL;

	constructor() { }
}

export const LOGIN_AS_USER = '[LGIN_AS] User';
export const LOGIN_AS_USER_SUCCESS = '[LGIN_AS] User !SUCCESS';
export const LOGIN_AS_USER_FAIL = '[LGIN_AS] User !FAIL';

export class LoginAsUser implements Action {
	readonly type = LOGIN_AS_USER;

	constructor(public payload: string) { }
}

export class LoginAsUserSuccess implements Action {
	readonly type = LOGIN_AS_USER_SUCCESS;

	constructor(public payload: string) { }
}

export class LoginAsUserFail implements Action {
	readonly type = LOGIN_AS_USER_FAIL;

	constructor() { }
}

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
	ListUsers | ListUsersSuccess | ListUsersFail |
	DeleteUser | DeleteUserSuccess | DeleteUserFail |
	AddUser | AddUserSuccess | AddUserFail |
	LoginAsUser | LoginAsUserSuccess | LoginAsUserFail;
