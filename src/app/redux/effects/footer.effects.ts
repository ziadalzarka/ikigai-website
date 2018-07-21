import { FooterVariables } from './../models/variables.model';
import { GraphqlAdminService } from '@app/dashboard/overview/settings/graphql-admin.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as FooterActions from '../actions/admin-footer.actions';

export type Action = FooterActions.All;

@Injectable()
export class FooterEffects {
	constructor(
		private actions: Actions,
		private router: Router,
		private adminService: GraphqlAdminService
	) { }

	@Effect()
	getVariables: Observable<Action> = this.actions
		.ofType<Action>(FooterActions.GET_FOOTER_VARIABLES)
		.pipe(
			mergeMap(_ =>
				this.adminService.getFooterVariables().pipe(
					map((vars: FooterVariables) => new FooterActions.GetFooterVariablesSuccess(vars)),
					catchError(() => of(new FooterActions.GetFooterVariablesFail()))
				)
			),
	);

	@Effect()
	updateVariables: Observable<Action> = this.actions
		.ofType<Action>(FooterActions.UPDATE_FOOTER_VARIABLES)
		.pipe(
			map((action: FooterActions.UpdateFooterVariables) => action.payload),
			mergeMap(payload =>
				this.adminService.updateVariables(payload).pipe(
					map(_ => new FooterActions.UpdateFooterVariablesSuccess()),
					catchError(() => of(new FooterActions.UpdateFooterVariablesFail()))
				)
			),
	);

}
