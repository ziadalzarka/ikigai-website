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

const applicationSettingsQuery = gql`
	query {
		applicationSettings {
			light_postsPerMonth
			light_gifs
			light_videos
			light_photography
			pro_postsPerMonth
			pro_gifs
			pro_videos
			pro_photography
			enterprise_postsPerMonth
			enterprise_gifs
			enterprise_videos
			enterprise_photography
			post
			videoMinute
			photo
			gif
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

	public static feedQueries = [];

	feedConnection(first: number, skip: number): Observable<ListPostsSuccessPayload> {
		const query = {
			query: feedQuery,
			variables: { first, skip }
		};
		PublicContentService.feedQueries.push(query);
		return this.apollo.query(query).pipe(
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

	applicationSettingsQuery() {
		return this.apollo.query({
			query: applicationSettingsQuery,
		}).pipe(
			map((res: any) => res.data.applicationSettings),
		);
	}
}
