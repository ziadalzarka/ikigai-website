import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Coupon } from '@app/redux/models/coupon.model';
import gql from 'graphql-tag';

const couponFragment = gql`
	fragment coupon on Coupon {
		id
		coupon
		value
		discountType
		usedIn {
			name
		}
		author {
			name
		}
		createdAt
	}
`;

const listCouponsQuery = gql`
	query($first: Int, $skip: Int){
		couponsConnection(first: $first, skip: $skip) {
			edges {
				node {
					...coupon
				}
			}
		}
	}
	${couponFragment}
`;

const createCouponMutation = gql`
	mutation($discountType: DiscountType!, $value: Int!, $repeat: Int) {
		createCoupons(discountType: $discountType, value: $value, repeat: $repeat) {
			...coupon
		}
	}
	${couponFragment}
`;

@Injectable({
	providedIn: 'root'
})
export class GraphqlCouponsService {

	constructor(private apollo: Apollo) { }

	listCoupons() {
		return this.apollo.query({
			query: listCouponsQuery,
		}).pipe(
			map((res: any) => (res.data.couponsConnection.edges)),
			map(edges => edges.map(node => { return { ...node.node as Coupon }; }))
		);
	}

	createCoupons(payload, repeat) {
		return this.apollo.mutate({
			mutation: createCouponMutation,
			variables: { ...payload, repeat }
		}).pipe(
			map((res: any) => res.data.createCoupons)
		);
	}
}
