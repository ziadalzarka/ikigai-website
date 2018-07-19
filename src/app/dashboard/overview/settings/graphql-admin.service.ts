import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { User } from '@app/redux/models/user.model';

const usersQuery = gql`
	{
		usersConnection {
			edges {
				node {
					id
					name
					username
					permissions
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlAdminService {

	constructor(private apollo: Apollo) { }

	users() {
		return this.apollo
			.watchQuery({ query: usersQuery })
			.valueChanges.pipe(
				map((res: any) => (res.data.usersConnection.edges)),
				map(edges => edges.map(node => { return { ...node.node as User }; }))
			);
	}
}
