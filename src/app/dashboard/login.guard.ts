import { NavigationService } from './../navigation.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { GetUser, GET_USER_SUCCESS, GET_USER_FAIL } from '@app/redux/actions/user.actions';
import * as fromUser from '@app/redux/reducers/user.reducer';
import { takeUntil } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LoginGuard implements CanActivate {
	constructor(
		private store: Store<AppState>,
		private router: Router,
		private navigation: NavigationService) { }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		const done = new Subject();

		return new Promise<boolean>(resolve => {
			const sub = this.store.select(fromUser.selectAction);
			sub.pipe(
				takeUntil(done)
			).subscribe(action => {
				/* ignore first */
				if (action != null && (
					action.type == GET_USER_SUCCESS ||
					action.type == GET_USER_FAIL)
				) {

					const isAuthenticated = action.payload != null;

					if (isAuthenticated) {
						resolve(false);
						this.navigation.dashboard();
					} else {
						resolve(true);
					}
					done.next(true);
				}
			});
			this.store.dispatch(new GetUser());
		});
	}
}
