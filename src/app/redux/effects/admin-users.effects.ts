import { GraphqlAdminService } from '@app/dashboard/overview/settings/graphql-admin.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as AdminUsersActions from '@app/redux/actions/admin-users.actions';
import { NavigationService } from '@app/navigation.service';
import { User } from '@app/redux/models/user.model';

export type Action = AdminUsersActions.All;

@Injectable()
export class AdminUsersEffects {
	constructor(
		private actions: Actions,
		private adminService: GraphqlAdminService,
		private router: Router,
		private navigation: NavigationService
	) { }

	@Effect()
	listUsers: Observable<Action> = this.actions
		.ofType<Action>(AdminUsersActions.LIST_USERS)
		.pipe(
			mergeMap(_ =>
				this.adminService.users().pipe(
					map((res: User[]) => new AdminUsersActions.ListUsersSuccess(res)),
					catchError(() => of(new AdminUsersActions.ListUsersFail()))
				)
			),
	);

	@Effect()
	addUser: Observable<Action> = this.actions
		.ofType<Action>(AdminUsersActions.ADD_USER)
		.pipe(
			map((action: AdminUsersActions.AddUser) => action.payload),
			mergeMap(user =>
				this.adminService.addUser(user).pipe(
					map((res: User) => new AdminUsersActions.AddUserSuccess(res)),
					catchError(() => of(new AdminUsersActions.AddUserFail()))
				)
			),
	);

	@Effect()
	loginAsUser: Observable<Action> = this.actions
		.ofType<Action>(AdminUsersActions.LOGIN_AS_USER)
		.pipe(
			map((action: AdminUsersActions.LoginAsUser) => action.payload),
			mergeMap(id =>
				this.adminService.loginAs(id).pipe(
					map(token => new AdminUsersActions.LoginAsUserSuccess(token)),
					catchError(() => of(new AdminUsersActions.LoginAsUserFail()))
				)
			),
	);

	@Effect({ dispatch: false })
	loginAsUserSuccess: Observable<any> = this.actions
		.ofType<Action>(AdminUsersActions.LOGIN_AS_USER_SUCCESS)
		.pipe(
			map((action: AdminUsersActions.LoginAsUserSuccess) => action.payload),
			map(token => {
				localStorage.setItem('token', token);
				this.navigation.absoluteLogin();
			}),
	);

	@Effect()
	deleteUser: Observable<Action> = this.actions
		.ofType<Action>(AdminUsersActions.DELETE_USER)
		.pipe(
			map((action: AdminUsersActions.DeleteUser) => action.payload),
			mergeMap(id =>
				this.adminService.deleteUser(id).pipe(
					map((res: User) => new AdminUsersActions.DeleteUserSuccess(res)),
					catchError(() => of(new AdminUsersActions.DeleteUserFail()))
				)
			),
	);

}
