import { routerTransition } from '@app/router.animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-overview',
	animations: [routerTransition],
	templateUrl: './overview.component.pug',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	sidebarHidden = false;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	hideSidebar() {
		this.sidebarHidden = true;
	}

	showSidebar() {
		this.sidebarHidden = false;
	}

}
