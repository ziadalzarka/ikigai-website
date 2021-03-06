import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@app/router.animations';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

@Component({
	selector: 'app-root',
	animations: [routerTransition],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	loading: boolean = false;

	constructor(private router: Router) { }

	ngOnInit() {
		/*
		Uncomment if you want a loader to show up

		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				this.loading = true;
			} else if (event instanceof RouteConfigLoadEnd) {
				this.loading = false;
			}
		});*/
	}

	getState(outlet) {
		return outlet.activatedRouteData.state;
	}
}
