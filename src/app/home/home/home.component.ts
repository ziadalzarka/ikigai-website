import { GraphqlPostsService } from './../../dashboard/overview/content/graphql-posts.service';
import { PostsComponent } from './../../dashboard/overview/content/posts/posts.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';
import { SeoService } from '@app/seo.service';
import { NavigationService } from '@app/navigation.service';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PostsComponent {

	content$;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private seoService: SeoService,
		navigationService: NavigationService,
		store: Store<AppState>,
		postsService: GraphqlPostsService,
		contentService: PublicContentService,
		element: ElementRef,
	) {
		super(navigationService, store, postsService);
		this.seoService.generateTags({});
		this.content$ = contentService.footer();
	}

	showPost({ id }) {
		this.router.navigate(['post', id]);
	}

	newTab(socialWebsite) {
		this.content$.pipe(first()).subscribe((content) => {
			window.open(content[socialWebsite], '_blank');
		});
	}
}
