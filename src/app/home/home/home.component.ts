import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';
import { SeoService } from '@app/seo.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	feed$;
	showing;

	constructor(
		private publicContent: PublicContentService,
		private router: Router,
		private seoService: SeoService) {

		this.seoService.generateTags({});
	}

	ngOnInit() {
		this.feed$ = this.publicContent.feed();
	}

	showPost({ id }) {
		this.router.navigate(['post', id]);
	}
}
