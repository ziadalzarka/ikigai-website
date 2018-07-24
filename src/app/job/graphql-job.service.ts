import { JobApplication } from '@app/redux/models/job-application.model';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

const applyForJobMutation = gql`
	mutation (
		$email: String!,
		$address: String,
		$phoneNumber: String,
		$firstName: String,
		$middleName: String,
		$lastName: String,
		$positions: [JobPosition!]!,
		$resumeFileId: String!,
		$linkedIn: String) {
			applyForWork(
				email: $email,
				address: $address,
				phoneNumber: $phoneNumber,
				firstName: $firstName,
				middleName: $middleName,
				lastName: $lastName,
				positions: $positions,
				resumeFileId: $resumeFileId,
				linkedIn: $linkedIn
			) {
				id
			}
		}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlJobService {

	constructor(private apollo: Apollo) {

	}

	applyForJob(data: JobApplication) {
		return this.apollo.mutate({
			mutation: applyForJobMutation,
			variables: data
		}).pipe(
			map(res => res.data.applyForWork)
		);
	}
}
