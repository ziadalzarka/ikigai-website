import { AppState } from './../../../../redux/app.state';
import { fabTransition } from './../../../../fab.animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromAdminUsers from '@app/redux/reducers/admin-users.reducer';
import { User } from '@app/redux/models/user.model';
import { ListUsers } from '@app/redux/actions/admin-users.actions';

@Component({
	selector: 'app-users',
	animations: [fabTransition],
	templateUrl: './users.component.pug',
	styleUrls: ['./users.component.css']
})
export class UsersComponent {

	showFab = false;
	users: Observable<User[]>;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private store: Store<AppState>) {

		this.users = this.store.select(fromAdminUsers.selectAll);
		this.store.dispatch(new ListUsers());
		// animation delay
		timer(500 + 200).toPromise().then(() => this.showFab = true);
	}

	getFabState() {
		return this.showFab ? 'show' : 'hide';
	}

	async hideFab() {
		this.showFab = false;
		await timer(100);
	}
}
