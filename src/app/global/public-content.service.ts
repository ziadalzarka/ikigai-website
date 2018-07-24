import { Post } from './../redux/models/post.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const feedPostFragment = gql`
	fragment feedPost on Post {
		id
		title
		updatedAt
		thumbnailBody
		badge
		badgeColorClass
		thumbnailImage {
			id
		}
		author {
			name
		}
	}
`;

const postQuery = gql`
	query($id: String!) {
		post(id: $id) {
			...feedPost
			body
		}
	}
	${feedPostFragment}
`;

const feedQuery = gql`
	query($first: Int!, $after: String) {
		feed(first: $first, after: $after) {
			edges {
      	node {
					...feedPost
				}
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
			tap(console.log),
			map((res: any) => res.data.feed.edges.map(edge => {
				return edge.node.thumbnailImage ? {
					...edge.node,
					thumbnailImageId: edge.node.thumbnailImage.id
				} : edge.node;
			}))
		);
	}

	footer() {
		return this.apollo.query({
			query: footerQuery
		}).pipe(
			map((res: any) => res.data.variables)
		);
	}

	post(id: string) {
		return this.apollo.query({
			query: postQuery,
			variables: { id }
		}).pipe(
			map((res: any) => res.data.post)
		);
	}
}
