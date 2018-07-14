import { Component, OnInit } from '@angular/core';

declare var loadMaterialize: any;

@Component({
	selector: 'app-client-application',
	templateUrl: './client-application.component.pug',
	styleUrls: ['./client-application.component.css']
})
export class ClientApplicationComponent implements OnInit {

	constructor() {

	}

	ngOnInit() {
		loadMaterialize();
	}

}
