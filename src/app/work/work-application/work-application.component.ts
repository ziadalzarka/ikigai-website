import { Component, OnInit } from '@angular/core';

enum Position {
	Media,
	Graphics,
	Photography,
	PublicRelations
}

@Component({
	selector: 'app-work-application',
	templateUrl: './work-application.component.pug',
	styleUrls: ['./work-application.component.css']
})
export class WorkApplicationComponent implements OnInit {

	position = Position;

	constructor() { }

	ngOnInit() {
	}

}
