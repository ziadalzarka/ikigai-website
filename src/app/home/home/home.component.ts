import { GraphqlPostsService } from './../../dashboard/overview/content/graphql-posts.service';
import { PostsComponent } from './../../dashboard/overview/content/posts/posts.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';
import { SeoService } from '@app/seo.service';
import { NavigationService } from '@app/navigation.service';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PostsComponent {

	constructor(
		private router: Router,
		private seoService: SeoService,
		navigationService: NavigationService,
		store: Store<AppState>,
		postsService: GraphqlPostsService) {
		super(navigationService, store, postsService);
		this.seoService.generateTags({});
	}

	showPost({ id }) {
		this.router.navigate(['post', id]);
	}
}
