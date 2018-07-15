import { fabTransition } from './../../../../fab.animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
	selector: 'app-users',
	animations: [fabTransition],
	templateUrl: './users.component.pug',
	styleUrls: ['./users.component.css']
})
export class UsersComponent {

	constructor(private route: ActivatedRoute, private router: Router) {

	}
}
