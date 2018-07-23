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
	) { }

	@Effect()
	publishPost: Observable<Action> = this.actions
		.ofType<Action>(PostsActions.PUBLISH_POST)
		.pipe(
			map((action: PostsActions.PublishPost) => action.payload),
			mergeMap((post: Post) =>
				this.postsService.publishPost(post).pipe(
					map(_ => new PostsActions.PublishPostSuccess()),
					catchError(() => of(new PostsActions.PublishPostFail()))
				)
			),
	);
}
