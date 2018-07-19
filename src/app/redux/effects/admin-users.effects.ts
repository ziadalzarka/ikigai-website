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
}
