import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Post } from '@app/redux/models/post.model';
import { map } from 'rxjs/operators';
import { feedPostFragment, feedQuery } from '@app/global/public-content.service';
import { Observable } from 'rxjs';

const updatePostMutation = gql`
	mutation(
		$id: ID!,
		$title: String,
		$body: String,
		$badge: String,
		$badgeColorClass: String,
		$thumbnailBody: String,
		$thumbnailImageId: String) {
			updatePost(
				id: $id,
				title: $title,
				body: $body,
				badge: $badge,
				badgeColorClass: $badgeColorClass,
				thumbnailBody: $thumbnailBody,
				thumbnailImageId: $thumbnailImageId
			) {
				...feedPost
				thumbnailBody
			}
		}
		${feedPostFragment}
`;

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
				...feedPost
				thumbnailBody
			}
	}
	${feedPostFragment}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlPostsService {

	constructor(private apollo: Apollo) { }

	updatePost(id: string, payload): Observable<Post> {
		return this.apollo.mutate({
			mutation: updatePostMutation,
			variables: { id, ...payload },
		}).pipe(
			map((res: any) => res.data.updatePost)
		);
	}

	publishPost(post: Post): Observable<Post> {
		return this.apollo.mutate({
			mutation: publishPostMutation,
			variables: post,
			// pagination needs to be implemented properly
			update: (store, { data: { publish } }) => {
				// Read the data from our cache for this query.
				const data = store.readQuery({ query: feedQuery, variables: { first: 10, skip: 0 } });
				// Add our comment from the mutation to the end.
				data.feed.edges.push(publish);
				// Write our data back to the cache.
				store.writeQuery({ query: feedQuery, variables: { first: 10, skip: 0 }, data });
			},
		}).pipe(
			map((res: any) => res.data.publish)
		);
	}
}
