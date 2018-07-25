import { Action } from '@ngrx/store';
import { Post } from '@app/redux/models/post.model';

export const OPEN_POST = '[OPEN] Post';
export const OPEN_POST_SUCCESS = '[OPEN] Post !SUCCESS';
export const OPEN_POST_FAIL = '[OPEN] Post !FAIL';

export class OpenPost implements Action {
	readonly type = OPEN_POST;

	constructor(public payload: string) { }
}

export class OpenPostSuccess implements Action {
	readonly type = OPEN_POST_SUCCESS;

	constructor(public payload: Post) { }
}

export class OpenPostFail implements Action {
	readonly type = OPEN_POST_FAIL;

	constructor() { }
}

export const LIST_POSTS = '[LIST] Posts';
export const LIST_POSTS_SUCCESS = '[LIST] Posts !SUCCESS';
export const LIST_POSTS_FAIL = '[LIST] Posts !FAIL';

export interface ListPostsPayload {
	first: number;
	skip: number;
}

export class ListPosts implements Action {
	readonly type = LIST_POSTS;

	constructor(public payload: ListPostsPayload) { }
}

export interface ListPostsSuccessPayload {
	count: number;
	posts: Post[];
}

export class ListPostsSuccess implements Action {
	readonly type = LIST_POSTS_SUCCESS;

	constructor(public payload: ListPostsSuccessPayload) { }
}

export class ListPostsFail implements Action {
	readonly type = LIST_POSTS_FAIL;

	constructor() { }
}

export const UPDATE_POST = '[UPDATE] Post';
export const UPDATE_POST_SUCCESS = '[UPDATE] Post !SUCCESS';
export const UPDATE_POST_FAIL = '[UPDATE] Post !FAIL';

export interface UpdatePostPayload {
	id: string;
	post: Post;
}

export class UpdatePost implements Action {
	readonly type = UPDATE_POST;

	constructor(public payload: UpdatePostPayload) { }
}

export class UpdatePostSuccess implements Action {
	readonly type = UPDATE_POST_SUCCESS;

	constructor(public payload: Post) { }
}

export class UpdatePostFail implements Action {
	readonly type = UPDATE_POST_FAIL;

	constructor() { }
}

export const PUBLISH_POST = '[PUBLISH] Post';
export const PUBLISH_POST_SUCCESS = '[PUBLISH] Post !SUCCESS';
export const PUBLISH_POST_FAIL = '[PUBLISH] Post !FAIL';

export class PublishPost implements Action {
	readonly type = PUBLISH_POST;

	constructor(public payload: Post) { }
}

export class PublishPostSuccess implements Action {
	readonly type = PUBLISH_POST_SUCCESS;

	constructor(public payload: Post) { }
}

export class PublishPostFail implements Action {
	readonly type = PUBLISH_POST_FAIL;

	constructor() { }
}

export type All =
	PublishPost | PublishPostSuccess | PublishPostFail |
	UpdatePost | UpdatePostSuccess | UpdatePostFail |
	OpenPost | OpenPostSuccess | OpenPostFail |
	ListPosts | ListPostsSuccess | ListPostsFail;
