import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, tap, catchError } from 'rxjs/operators';
import { User } from '@app/redux/models/user.model';
import { Permissions } from '@app/redux/enums/permission.enum';

const userFragment = gql`
	fragment user on User {
		id
		name
		username
		permissions
		lastLogin
	}
`;

const usersQuery = gql`
	{
		usersConnection {
			edges {
				node {
					...user
				}
			}
		}
	}
	${userFragment}
`;

const addUserMutation = gql`
	mutation(
		$name: String!,
		$username: String!,
		$password: String!,
		$permissions: [Permission!]!) {
			addUser(
				name: $name,
				username: $username,
				password: $password,
				permissions: $permissions) {
					user {
						...user
					}
			}
	}
	${userFragment}
`;

const changeUserPermissionsMutation = gql`
	mutation($id: ID!, $permissions: [Permission!]!) {
		changeUserPermissions(id: $id, permissions: $permissions) {
			id
			permissions
		}
	}
`;

const loginAsMutation = gql`
	mutation($id: ID!) {
		loginAs(id: $id) {
			token
		}
	}
`;

const deleteUserMutation = gql`
	mutation($id: ID!) {
		deleteUser(id: $id) {
			id
		}
	}
`;

const footerVariablesQuery = gql`
	{
		variables {
			email
			phone1
			phone2
			address
			facebook
			instagram
			linkedIn
			additionalTitle
			additionalBody
		}
	}
`;

const emailsVariablesQuery = gql`
	{
		variables {
			contactEmail
			clientsEmail
			jobsEmail
		}
	}
`;

const updateVariablesMutation = gql`
	mutation (
		$email: String
		$phone1: String
		$phone2: String
		$address: String
		$facebook: String
		$instagram: String
		$linkedIn: String
		$contactEmail: String
		$clientsEmail: String
		$jobsEmail: String
		$additionalTitle: String
		$additionalBody: String
	) {
		updateVariables(
			email: $email
			phone1: $phone1
			phone2: $phone2
			address: $address
			facebook: $facebook
			instagram: $instagram
			linkedIn: $linkedIn
			contactEmail: $contactEmail
			clientsEmail: $clientsEmail
			jobsEmail: $jobsEmail
			additionalTitle: $additionalTitle
			additionalBody: $additionalBody
		) {
			index
		}
	}
`;

const updateApplicationSettingsMutation = gql`
	mutation(
		$light_postsPerMonth: Int!
		$light_gifs: Int!
		$light_videos: Int!
		$light_photography: Int!
		$pro_postsPerMonth: Int!
		$pro_gifs: Int!
		$pro_videos: Int!
		$pro_photography: Int!
		$enterprise_postsPerMonth: Int!
		$enterprise_gifs: Int!
		$enterprise_videos: Int!
		$enterprise_photography: Int!
		$post: Int!
		$videoMinute: Int!
		$photo: Int!
		$gif: Int!
	) {
		updateApplicationSettings(
			light_postsPerMonth: $light_postsPerMonth,
			light_gifs: $light_gifs,
			light_videos: $light_videos,
			light_photography: $light_photography,
			pro_postsPerMonth: $pro_postsPerMonth,
			pro_gifs: $pro_gifs,
			pro_videos: $pro_videos,
			pro_photography: $pro_photography,
			enterprise_postsPerMonth: $enterprise_postsPerMonth,
			enterprise_gifs: $enterprise_gifs,
			enterprise_videos: $enterprise_videos,
			enterprise_photography: $enterprise_photography,
			post: $post,
			videoMinute: $videoMinute,
			photo: $photo,
			gif: $gif,
		) {
			index
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
			.query({ query: usersQuery })
			.pipe(
				map((res: any) => (res.data.usersConnection.edges)),
				map(edges => edges.map(node => { return { ...node.node as User }; }))
			);
	}

	addUser({ name, username, password, permissions }: Partial<User>) {
		return this.apollo.mutate({
			mutation: addUserMutation,
			variables: { name, username, password, permissions }
		}).pipe(
			map((res: any) => res.data.addUser.user)
		);
	}

	changeUserPermissions(id: string, permissions: Permissions[]) {
		return this.apollo.mutate({
			mutation: changeUserPermissionsMutation,
			variables: { id, permissions }
		}).pipe(
			map((res: any) => res.data.changeUserPermissions)
		);
	}

	loginAs(id: string) {
		return this.apollo.mutate({
			mutation: loginAsMutation,
			variables: { id }
		}).pipe(
			map((res: any) => res.data.loginAs.token)
		);
	}

	deleteUser(id: string) {
		return this.apollo.mutate({
			mutation: deleteUserMutation,
			variables: { id }
		}).pipe(
			map((res: any) => res.data.deleteUser)
		);
	}

	getFooterVariables() {
		return this.apollo.query({
			query: footerVariablesQuery
		}).pipe(
			map((res: any) => res.data.variables),
		);
	}

	updateVariables(data) {
		return this.apollo.mutate({
			mutation: updateVariablesMutation,
			variables: data
		}).pipe(
			map((res: any) => res.data.updateVariables)
		);
	}

	updateApplicationSettings(data) {
		return this.apollo.mutate({
			mutation: updateApplicationSettingsMutation,
			variables: data,
		}).pipe(
			map((res: any) => res.data.updateApplicationSettings),
		);
	}
}
