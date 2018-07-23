import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { User } from '@app/redux/models/user.model';

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

const meQuery = gql`
	{
		me {
			...user
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
export class GraphqlUserService {

	constructor(private apollo: Apollo) { }

	me() {
		return this.apollo
			.query({ query: meQuery })
			.pipe(
				map((res: any) => (res.data.me as User)),
		);
	}

	login(username, password) {
		return this.apollo.mutate({
			mutation: loginMutation,
			variables: { username, password }
		}).pipe(
			map((res: any) => (res.data.login as LoginResponse))
		);
	}
}
