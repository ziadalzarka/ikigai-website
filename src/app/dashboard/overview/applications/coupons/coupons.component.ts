import { GraphqlApplicationsService } from './../graphql-applications.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/redux/app.state';
import * as fromCoupons from '@app/redux/reducers/coupons.reducer';
import { ListCoupon } from '@app/redux/actions/coupons.actions';

@Component({
	selector: 'app-coupons',
	templateUrl: './coupons.component.pug',
	styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

	coupons$;

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.coupons$ = this.store.select(fromCoupons.selectAll);
		this.store.dispatch(new ListCoupon());
	}

}
