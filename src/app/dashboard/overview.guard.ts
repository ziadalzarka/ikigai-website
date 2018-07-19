import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '@app/redux/app.state';
import { GetUser } from '@app/redux/actions/user.actions';

@Injectable({
	providedIn: 'root'
})
export class OverviewGuard implements CanActivate {
	constructor(private store: Store<AppState>) { }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return new Promise<boolean>(resolve => {
			this.store.select('user', 'user').subscribe(user => {
				if (user) {
					resolve(true);
				}
			});
			this.store.dispatch(new GetUser());
		});
	}
}
