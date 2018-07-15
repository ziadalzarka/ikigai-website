import { routerTransition } from '@app/router.animations';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-overview',
	animations: [routerTransition],
	templateUrl: './overview.component.pug',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	getState(outlet) {
		return outlet.activatedRouteData.state;
	}

}
