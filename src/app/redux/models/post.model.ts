import { User } from '@app/redux/models/user.model';

export interface Post {
	id: string;
	title: string;
	body: string;
	author: User;
	isPublished: boolean;
	createdAt: Date;
	updatedAt: Date;
}
