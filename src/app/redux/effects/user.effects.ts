import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { GraphqlLoginService, LoginResponse } from '@app/dashboard/login/graphql-login.service';
import { CookieService } from 'ngx-cookie-service';

export type Action = UserActions.All;

@Injectable()
export class UserEffects {
	constructor(
		private actions: Actions,
		private login: GraphqlLoginService,
		private cookieService: CookieService,
		private router: Router
	) { }

	@Effect()
	loginUser: Observable<Action> = this.actions
		.ofType<Action>(UserActions.LOGIN_USER)
		.pipe(
			map((action: UserActions.LoginUser) => action.payload),
			mergeMap(payload => this.login.login(payload.username, payload.password)),
			map((res: LoginResponse) => new UserActions.LoginUserSuccess(res)),
			catchError(() => of(new UserActions.LoginUserFail()))
		);

	@Effect({ dispatch: false })
	loginUserSuccess: Observable<any> = this.actions
		.ofType<Action>(UserActions.LOGIN_USER_SUCCESS)
		.pipe(
			map((action: UserActions.LoginUserSuccess) => action.payload),
			map((res: LoginResponse) => {
				this.cookieService.set('token', res.token, 60 * 60 * 24 * 30);
				this.router.navigate(['dashboard', 'content', 'posts']);
			})
		);
}
