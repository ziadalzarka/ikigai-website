import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loading, failed, idle } from 'utils/utils';
import * as PostsActions from '@app/redux/actions/posts.actions';
import { Post } from '@app/redux/models/post.model';

export const postsAdapter = createEntityAdapter<Post>();

export interface State extends EntityState<Post> {
	loading: boolean;
	failed: boolean;
}

export const initialState = postsAdapter.getInitialState({
	loading: false,
	failed: false,
});

export function postsReducer(
	state: State = initialState,
	action: PostsActions.All) {

	switch (action.type) {

		case PostsActions.PUBLISH_POST:
			return { ...state, ...loading };
		case PostsActions.PUBLISH_POST_SUCCESS:
			return { ...state, ...idle };
		case PostsActions.PUBLISH_POST:
			return { ...state, ...failed };

		default:
			return state;
	}
}

export const getPostsState = createFeatureSelector<State>('posts');

export const selectLoading = createSelector(getPostsState,
	(state: State) => state.loading);
export const selectFailed = createSelector(getPostsState,
	(state: State) => state.failed);
export const { selectAll } = postsAdapter.getSelectors(getPostsState);
