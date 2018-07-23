import { Router } from '@angular/router';
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

	constructor(private publicContent: PublicContentService, private router: Router) { }

	ngOnInit() {
		this.feed$ = this.publicContent.feed();
	}

	showPost() {

	}
}
