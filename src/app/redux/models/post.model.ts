export interface Post {
	id?: string;
	title: string;
	body: string;
	thumbnailBody: string;
	thumbnailImageId?: string;
	badge?: string;
	badgeColorClass?: string;
	updatedAt?: Date;
	thumbnailImage?: {
		id?: string;
	};
	author?: {
		id?: string;
		name?: string;
	}
}
