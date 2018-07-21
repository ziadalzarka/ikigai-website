import { Permissions } from '@app/redux/enums/permission.enum';
import { User } from '@app/redux/models/user.model';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { routerTransition } from '@app/router.animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromUser from '@app/redux/reducers/user.reducer';
import { first } from 'rxjs/operators';
import { LogoutUser } from '@app/redux/actions/user.actions';

@Component({
	selector: 'app-overview',
	animations: [routerTransition],
	templateUrl: './overview.component.pug',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	user: Observable<User>;
	sidebarHidden = false;
	permissions = {
		[Permissions.Admin]: false,
		[Permissions.Posts]: false,
		[Permissions.JobApplications]: false,
		[Permissions.ClientApplications]: false,
		[Permissions.ContactApplications]: false,
	};

	constructor(private router: Router, private store: Store<AppState>) { }

	ngOnInit() {
		this.user = this.store.select(fromUser.selectUser);
		this.setupPermissions();
	}

	setupPermissions() {

		const grantAll = () => {
			for (const key in this.permissions) {
				if (this.permissions.hasOwnProperty(key)) {
					this.permissions[key] = true;
				}
			}
		};

		this.user.pipe(first()).subscribe(({ permissions }) => {
			permissions.forEach(permit => {
				if (permit.toString() == Permissions.Admin) {
					grantAll();
				} else {
					this.permissions[permit.toString()] = true;
				}
			});
		});
	}

	logout() {
		this.store.dispatch(new LogoutUser());
	}

	hideSidebar() {
		this.sidebarHidden = true;
	}

	showSidebar() {
		this.sidebarHidden = false;
	}

}
