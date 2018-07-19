import { User } from '@app/redux/models/user.model';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { routerTransition } from '@app/router.animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-overview',
	animations: [routerTransition],
	templateUrl: './overview.component.pug',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	user: Observable<User>;
	sidebarHidden = false;

	constructor(private router: Router, private store: Store<AppState>) { }

	ngOnInit() {
		this.user = this.store.select('user', 'user');
	}

	hideSidebar() {
		this.sidebarHidden = true;
	}

	showSidebar() {
		this.sidebarHidden = false;
	}

}
