import { Action } from '@ngrx/store';
import { Post } from '@app/redux/models/post.model';

export const PUBLISH_POST = '[PUBLISH] Post';
export const PUBLISH_POST_SUCCESS = '[PUBLISH] Post !SUCCESS';
export const PUBLISH_POST_FAIL = '[PUBLISH] Post !FAIL';

export class PublishPost implements Action {
	readonly type = PUBLISH_POST;

	constructor(public payload: Post) { }
}

export class PublishPostSuccess implements Action {
	readonly type = PUBLISH_POST_SUCCESS;

	constructor() { }
}

	export class PublishPostFail implements Action {
	readonly type = PUBLISH_POST_FAIL;

	constructor() { }
}

export type All =
	PublishPost | PublishPostSuccess | PublishPostFail;
