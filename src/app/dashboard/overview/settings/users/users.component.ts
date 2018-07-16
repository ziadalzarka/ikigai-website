import { fabTransition } from './../../../../fab.animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-users',
	animations: [fabTransition],
	templateUrl: './users.component.pug',
	styleUrls: ['./users.component.css']
})
export class UsersComponent {

	showFab = false;

	constructor(private route: ActivatedRoute, private router: Router) {
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
