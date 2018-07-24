import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Post } from '@app/redux/models/post.model';
import { map } from 'rxjs/operators';

const publishPostMutation = gql`
	mutation(
		$title: String!,
		$body: String!,
		$thumbnailBody: String!,
		$thumbnailImageId: String,
		$badge: String,
		$badgeColorClass: String) {
		publish(
			title: $title,
			body: $body,
			thumbnailBody: $thumbnailBody,
			thumbnailImageId: $thumbnailImageId,
			badge: $badge,
			badgeColorClass: $badgeColorClass)
			{
				id
			}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlPostsService {

	constructor(private apollo: Apollo) { }

	listPosts() {

	}

	publishPost(post: Post) {
		return this.apollo.mutate({
			mutation: publishPostMutation,
			variables: post
		}).pipe(
			map((res: any) => res.data.publish)
		);
	}
}
