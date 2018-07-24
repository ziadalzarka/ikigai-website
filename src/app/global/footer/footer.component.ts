import { PublicContentService } from './../public-content.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.pug',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	content$: Observable<any>;

	constructor(private contentService: PublicContentService) { }

	ngOnInit() {
		this.content$ = this.contentService.footer();
	}

	newTab(socialWebsite) {
		this.content$.pipe(first()).subscribe((content) => {
			window.open(content[socialWebsite], '_blank');
		});
	}

}
