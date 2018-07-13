import { Component, OnInit } from '@angular/core';
import { routerTransition } from '@app/router.animations';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	animations: [routerTransition],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				console.log('loading');
			} else if (event instanceof RouteConfigLoadEnd) {
				console.log('loaded');
			}
		});
	}

	getState(outlet) {
		return outlet.activatedRouteData.state;
	}
}
