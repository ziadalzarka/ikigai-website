import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { ContactApplication } from '@app/redux/models/contact-application.model';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

const sendContactApplicationMutation = gql`
	mutation(
		$name: String!
		$phoneNumber: String
		$email: String!
		$question: String!) {
			contact(name: $name, phoneNumber: $phoneNumber, email: $email, question: $question) {
				id
			}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlContactService {

	constructor(private apollo: Apollo) { }

	send(application: ContactApplication): Observable<string> {
		return this.apollo.mutate({
			mutation: sendContactApplicationMutation,
			variables: application,
		}).pipe(map((res: any) => res.data.contact));
	}
}
