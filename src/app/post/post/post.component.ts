import { SeoService } from '@app/seo.service';
import { timer } from 'rxjs';
import { Post } from '@app/redux/models/post.model';
import { NavigationService } from './../../navigation.service';
import { PublicContentService } from '@app/global/public-content.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { scrollToTop } from 'utils/utils';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.pug',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	constructor(private route: ActivatedRoute,
		private contentService: PublicContentService,
		private navigationService: NavigationService,
		private seoService: SeoService) { }

	post: Post;
	storage = environment.storage;

	ngOnInit() {
		scrollToTop();

		this.route.params.subscribe(async (params) => {
			try {

				if (!params.id) {
					this.navigationService.notFound();
				}
				this.post = await this.contentService.post(params.id).toPromise();

				if (!this.post) {
					this.navigationService.notFound();
				}

				this.seoService.generateTags({
					title: this.post.title,
					image: `${this.storage}/${this.post.thumbnailImageId}`,
					description: this.post.thumbnailBody,
				});
			} catch (error) {
				this.navigationService.notFound();
			}
		}, () => this.navigationService.notFound());
	}

}
