import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { ClientApplication } from '@app/redux/models/client-application.model';
import { map } from 'rxjs/operators';
import { Coupon } from '@app/redux/models/coupon.model';
import { Observable, of } from 'rxjs';

const couponQuery = gql`
	query($coupon: String!) {
		coupon(coupon: $coupon) {
			discountType
			value
		}
	}
`;

const clientApplyMutation = gql`
	mutation(
		$name: String!
		$phoneNumber: String
		$email: String!
		$facebook: String
		$address: String
		$postsPerMonth: Int!
		$photography: Int!
		$gifs: Int!
		$videos: Int!
		$videoMinutesCount: Int!
		$website: Boolean!
		$hasHost: Boolean!
		$hasDomain: Boolean!
		$dealYears: Int!
		$package: Package!
		$totalPrice: Int!
	) {
		applyClient(
			name: $name
			phoneNumber: $phoneNumber
			email: $email
			facebook: $facebook
			address: $address
			postsPerMonth: $postsPerMonth
			photography: $photography
			gifs: $gifs
			videos: $videos
			videoMinutesCount: $videoMinutesCount
			website: $website
			hasHost: $hasHost
			hasDomain: $hasDomain
			dealYears: $dealYears
			dealPackage: $package
			totalPrice: $totalPrice
		) {
			id
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlClientService {

	constructor(private apollo: Apollo) { }

	applyClient(application: ClientApplication) {
		return this.apollo.mutate({
			mutation: clientApplyMutation,
			variables: application
		}).pipe(
			map(res => res.data.applyClient)
		);
	}

	checkCoupon(coupon: string): Observable<Coupon> {
		if (!coupon) return of(null);
		return this.apollo.query({
			query: couponQuery,
			variables: { coupon }
		}).pipe(
			map((res: any) => res.data.coupon)
		);
	}
}
