import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { GraphqlUserService, LoginResponse } from '@app/dashboard/login/graphql-user.service';
import { User } from '@app/redux/models/user.model';

export type Action = UserActions.All;

@Injectable()
export class UserEffects {
	constructor(
		private actions: Actions,
		private userService: GraphqlUserService,
		private router: Router
	) { }

	@Effect()
	loginUser: Observable<Action> = this.actions
		.ofType<Action>(UserActions.LOGIN_USER)
		.pipe(
			map((action: UserActions.LoginUser) => action.payload),
			mergeMap(payload =>
				/* move catchError in here because it can't be in the effect stream */
				this.userService.login(payload.username, payload.password).pipe(
					map((res: LoginResponse) => new UserActions.LoginUserSuccess(res)),
					catchError(() => of(new UserActions.LoginUserFail()))
				)
			),
	);

	@Effect({ dispatch: false })
	loginUserSuccess: Observable<any> = this.actions
		.ofType<Action>(UserActions.LOGIN_USER_SUCCESS)
		.pipe(
			map((action: UserActions.LoginUserSuccess) => action.payload),
			map((res: LoginResponse) => {
				localStorage.setItem('token', res.token);
				this.router.navigate(['dashboard', 'content', 'posts']);
			})
		);

	@Effect()
	getUser: Observable<Action> = this.actions
		.ofType<Action>(UserActions.GET_USER)
		.pipe(
			mergeMap(() => this.userService.me()),
			map(user => new UserActions.GetUserSuccess(user))
		);
}
