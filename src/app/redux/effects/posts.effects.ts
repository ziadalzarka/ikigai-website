import { PublicContentService } from '@app/global/public-content.service';
import { ListPostsPayload } from './../actions/posts.actions';
import { GraphqlPostsService } from './../../dashboard/overview/content/graphql-posts.service';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import * as PostsActions from '@app/redux/actions/posts.actions';
import { Post } from '@app/redux/models/post.model';

export type Action = PostsActions.All;

@Injectable()
export class PostsEffects {
	constructor(
		private actions: Actions,
		private postsService: GraphqlPostsService,
		private contentService: PublicContentService,
	) { }

	@Effect()
	listPosts: Observable<Action> = this.actions
		.ofType<Action>(PostsActions.LIST_POSTS)
		.pipe(
			map((action: PostsActions.ListPosts) => action.payload),
			mergeMap((payload: ListPostsPayload) =>
				this.contentService.feedConnection(payload.first, payload.skip).pipe(
					map(res => new PostsActions.ListPostsSuccess(res)),
					catchError(() => of(new PostsActions.ListPostsFail()))
				)
			),
	);

	@Effect()
	publishPost: Observable<Action> = this.actions
		.ofType<Action>(PostsActions.PUBLISH_POST)
		.pipe(
			map((action: PostsActions.PublishPost) => action.payload),
			mergeMap((post: Post) =>
				this.postsService.publishPost(post).pipe(
					map(res => new PostsActions.PublishPostSuccess(res)),
					catchError(() => of(new PostsActions.PublishPostFail()))
				)
			),
	);

	@Effect()
	updatePost: Observable<Action> = this.actions
		.ofType<Action>(PostsActions.UPDATE_POST)
		.pipe(
			map((action: PostsActions.UpdatePost) => action.payload),
			mergeMap(({ id, post }) =>
				this.postsService.updatePost(id, post).pipe(
					map(res => new PostsActions.UpdatePostSuccess(res)),
					catchError(() => of(new PostsActions.UpdatePostFail()))
				)
			),
	);
}
