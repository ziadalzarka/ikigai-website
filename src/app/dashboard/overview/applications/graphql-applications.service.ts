import { ClientApplication } from '@app/redux/models/client-application.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

const listClientApplicationsQuery = gql`
	{
		clientApplicationsConnection {
			edges {
				node {
					id
					name
					phoneNumber
					email
					facebook
					package
					totalPrice
					createdAt
				}
			}
		}
	}
`;

const getClientApplicationsQuery = gql`
	query($id: ID!) {
		clientApplication(id: $id) {
			name
			phoneNumber
			email
			facebook
			address
			postsPerMonth
			photography
			gifs
			videos
			videoMinutesCount
			website
			hasHost
			hasDomain
			dealYears
			package
			totalPrice
			createdAt
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlApplicationsService {

	constructor(private apollo: Apollo) { }

	listClientApplications() {
		return this.apollo
			.query({ query: listClientApplicationsQuery }).pipe(
				map((res: any) => (res.data.clientApplicationsConnection.edges)),
				map(edges => edges.map(node => { return { ...node.node as ClientApplication }; }))
			);
	}

	getClientApplication(id: string) {
		return this.apollo
			.query({
				query: getClientApplicationsQuery,
				variables: { id }
			}).pipe(
				map((res: any) => res.data.clientApplication)
			);
	}
}
