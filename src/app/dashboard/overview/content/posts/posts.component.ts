import { Observable } from 'rxjs';
import { ListPosts } from '@app/redux/actions/posts.actions';
import { AppState } from '@app/redux/app.state';
import { Store } from '@ngrx/store';
import { NavigationService } from '@app/navigation.service';
import { Component, OnInit } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';
import * as fromPosts from '@app/redux/reducers/posts.reducer';
import { Post } from '@app/redux/models/post.model';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.pug',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	public pageSize = 5;

	_page = 0;
	feed$: Observable<Post[]>;

	get page() {
		return this._page;
	}

	set page(value) {
		this.store.dispatch(new ListPosts({ first: this.pageSize, skip: (value - 1) * this.pageSize }));
		this._page = value;
	}

	constructor(
		private navigationService: NavigationService,
		private store: Store<AppState>) {

	}

	count$;

	ngOnInit() {
		this.feed$ = this.store.select(fromPosts.selectAll);
		this.count$ = this.store.select(fromPosts.selectCount);
	}

	editPost(post) {
		this.navigationService.editPost(post.id);
	}

	openPost(post) {
		window.open(`/post/${post.id}`, '_blank');
	}

	handleOption(name, post) {
		switch (name) {
			case 'edit':
				this.editPost(post);
				break;
			default:
				break;
		}
	}

}
