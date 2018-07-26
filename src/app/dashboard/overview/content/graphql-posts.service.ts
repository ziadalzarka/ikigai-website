import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Post } from '@app/redux/models/post.model';
import { map } from 'rxjs/operators';
import { feedPostFragment, feedQuery, PublicContentService } from '@app/global/public-content.service';
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

const deletePostMutation = gql`
	mutation($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlPostsService {

	constructor(private apollo: Apollo) { }

	deletePost(id: string) {
		return this.apollo.mutate({
			mutation: deletePostMutation,
			variables: { id },
			refetchQueries: PublicContentService.feedQueries,
		});
	}

	updatePost(id: string, payload): Observable<Post> {
		return this.apollo.mutate({
			mutation: updatePostMutation,
			variables: { id, ...payload },
			refetchQueries: PublicContentService.feedQueries,
		}).pipe(
			map((res: any) => res.data.updatePost)
		);
	}

	publishPost(post: Post): Observable<Post> {
		return this.apollo.mutate({
			mutation: publishPostMutation,
			variables: post,
			refetchQueries: PublicContentService.feedQueries,
		}).pipe(
			map((res: any) => res.data.publish)
		);
	}
}
