import { LoginResponse } from './../../dashboard/login/graphql-login.service';
import { Action } from '@ngrx/store';
import { User } from '@app/redux/models/user.model';

export const LOGIN_USER = '[LOGIN] User';
export const LOGIN_USER_SUCCESS = '[LOGIN] User !SUCCESS';
export const LOGIN_USER_FAIL = '[LOGIN] User !FAIL';

export class LoginUser implements Action {
	readonly type = LOGIN_USER;

	constructor(public payload: User) { }
}

export class LoginUserSuccess implements Action {
	readonly type = LOGIN_USER_SUCCESS;

	constructor(public payload: LoginResponse) { }
}

export class LoginUserFail implements Action {
	readonly type = LOGIN_USER_FAIL;

	constructor() { }
}

export type All =
	LoginUser | LoginUserSuccess | LoginUserFail;
