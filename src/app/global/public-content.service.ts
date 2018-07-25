import { ListPostsSuccessPayload } from './../redux/actions/posts.actions';
import { Post } from './../redux/models/post.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const feedPostFragment = gql`
	fragment feedPost on Post {
		id
		title
		updatedAt
		badge
		badgeColorClass
		thumbnailBody
		thumbnailImage {
			id
		}
		author {
			name
		}
	}
`;

const postQuery = gql`
	query($id: ID!) {
		post(id: $id) {
			...feedPost
			body
		}
	}
	${feedPostFragment}
`;

export const feedQuery = gql`
	query($first: Int!, $skip: Int) {
		feed(first: $first, skip: $skip) {
			edges {
      	node {
					...feedPost
				}
			}
			aggregate {
      	count
    	}
		}
	}
	${feedPostFragment}
`;

const footerQuery = gql`
	{
		variables {
			address
			email
			phone1
			phone2
			additionalTitle
			additionalBody
			facebook
			instagram
			linkedIn
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class PublicContentService {

	constructor(private apollo: Apollo) { }

	feed(): Observable<Post> {
		return this.apollo.query({
			query: feedQuery,
			variables: { first: 4 }
		}).pipe(
			map((res: any) => res.data.feed.edges.map(edge => {
				return edge.node.thumbnailImage ? {
					...edge.node,
					thumbnailImageId: edge.node.thumbnailImage.id
				} : edge.node;
			}))
		);
	}

	feedConnection(first: number, skip: number): Observable<ListPostsSuccessPayload> {
		return this.apollo.query({
			query: feedQuery,
			variables: { first, skip }
		}).pipe(
			map((res: any) => {
				return {
					posts: res.data.feed.edges.map(edge => {
						return edge.node.thumbnailImage ? {
							...edge.node,
							thumbnailImageId: edge.node.thumbnailImage.id
						} : edge.node;
					}),
					count: res.data.feed.aggregate.count
				}
			})
		);
	}

	footer() {
		return this.apollo.query({
			query: footerQuery
		}).pipe(
			map((res: any) => res.data.variables)
		);
	}

	post(id: string): Observable<Post> {
		return this.apollo.query({
			query: postQuery,
			variables: { id }
		}).pipe(
			map((res: any) => res.data.post),
			map(post => {
				return post.thumbnailImage ? {
					...post,
					thumbnailImageId: post.thumbnailImage.id
				} : post;
			})
		);
	}
}
