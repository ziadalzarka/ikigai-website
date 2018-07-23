import { Component, OnInit } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	feed$;
	showing;

	constructor(private publicContent: PublicContentService) { }

	ngOnInit() {
		this.feed$ = this.publicContent.feed();
	}

	showPost() {
		this.showing = true;
	}
}
