import { GraphqlApplicationsService } from './../../dashboard/overview/applications/graphql-applications.service';
import { GraphqlAdminService } from '@app/dashboard/overview/settings/graphql-admin.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as ClientApplicationsActions from '@app/redux/actions/client-applications.actions';
import { NavigationService } from '@app/navigation.service';
import { User } from '@app/redux/models/user.model';
import { ClientApplication } from '@app/redux/models/client-application.model';

export type Action = ClientApplicationsActions.All;

@Injectable()
export class ClientApplicationsEffects {
	constructor(
		private actions: Actions,
		private applicationsService: GraphqlApplicationsService,
		private router: Router,
		private navigation: NavigationService
	) { }

	@Effect()
	listClientApplications: Observable<Action> = this.actions
		.ofType<Action>(ClientApplicationsActions.LIST_CLIENT_APPLICATIONS)
		.pipe(
			mergeMap(_ =>
				this.applicationsService.listClientApplications().pipe(
					map((res: ClientApplication[]) =>
						new ClientApplicationsActions.ListClientApplicationsSuccess(res)
					),
					catchError(() => of(new ClientApplicationsActions.ListClientApplicationsFail()))
				)
			),
	);

	@Effect()
	getClientApplication: Observable<Action> = this.actions
		.ofType<Action>(ClientApplicationsActions.GET_CLIENT_APPLICATION)
		.pipe(
			map((action: ClientApplicationsActions.GetClientApplication) => action.payload),
			mergeMap(id =>
				this.applicationsService.getClientApplication(id).pipe(
					map((res: ClientApplication) =>
						new ClientApplicationsActions.GetClientApplicationSuccess(res)
					),
					catchError(() => of(new ClientApplicationsActions.GetClientApplicationFail()))
				)
			),
	);
}
