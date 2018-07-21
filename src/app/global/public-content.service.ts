import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

	footer() {
		return this.apollo.watchQuery({
			query: footerQuery
		}).valueChanges.pipe(
			map((res: any) => res.data.variables)
		);
	}
}
