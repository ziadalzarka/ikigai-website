import { Permission } from '@app/redux/enums/permission.enum';
import { Post } from '@app/redux/models/post.model';

export interface User {
	id: string;
	name: string;
	username: string;
	password: string;
	permissions: [Permission];
	posts: [Post];
}
