import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

const userFragment = gql`
	fragment user on User {
		name
		username
		permissions
	}
`;

const loginMutation = gql`
	mutation($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				...user
			}
		}
	}
	${userFragment}
`;

export interface LoginResponse {
	token: string;
	user: User;
}

@Injectable({
	providedIn: 'root'
})
export class GraphqlLoginService {

	constructor(private apollo: Apollo) { }

	login(username, password) {
		return this.apollo.mutate({
			mutation: loginMutation,
			variables: { username, password }
		}).pipe(
			map((res: any) => (res.data.login as LoginResponse))
		);
	}
}
