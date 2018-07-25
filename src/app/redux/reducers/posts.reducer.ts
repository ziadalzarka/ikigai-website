import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loading, failed, idle, success } from 'utils/utils';
import * as PostsActions from '@app/redux/actions/posts.actions';
import { Post } from '@app/redux/models/post.model';

export const postsAdapter = createEntityAdapter<Post>();

export interface State extends EntityState<Post> {
	loading: boolean;
	failed: boolean;
	success: boolean;
	count: number;
}

export const initialState = postsAdapter.getInitialState({
	...idle,
	count: 0
});

export function postsReducer(
	state: State = initialState,
	action: PostsActions.All) {

	switch (action.type) {

		case PostsActions.PUBLISH_POST:
			return { ...state, ...loading };
		case PostsActions.PUBLISH_POST_SUCCESS:
			return {
				...postsAdapter.addOne(action.payload, state),
				...success,
			};
		case PostsActions.PUBLISH_POST:
			return { ...state, ...failed };

		case PostsActions.OPEN_POST:
			return { ...state, ...loading };
		case PostsActions.OPEN_POST_SUCCESS:
			return { ...state, ...success };
		case PostsActions.OPEN_POST:
			return { ...state, ...failed };

		case PostsActions.LIST_POSTS:
			return { ...state, ...loading };
		case PostsActions.LIST_POSTS_SUCCESS:
			return {
				...postsAdapter.addAll(action.payload.posts, state),
				count: action.payload.count,
				...success
			};
		case PostsActions.LIST_POSTS:
			return { ...state, ...failed };

		case PostsActions.UPDATE_POST:
			return { ...state, ...loading };
		case PostsActions.UPDATE_POST_SUCCESS:
			return { ...state, ...success };
		case PostsActions.UPDATE_POST:
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
export const selectCount = createSelector(getPostsState,
	(state: State) => state.count);

export const { selectAll } = postsAdapter.getSelectors(getPostsState);
