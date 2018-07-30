import { FormBuilder } from '@angular/forms';
import { GraphqlApplicationsService } from './../graphql-applications.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/redux/app.state';
import * as fromCoupons from '@app/redux/reducers/coupons.reducer';
import { ListCoupon, CreateCoupon } from '@app/redux/actions/coupons.actions';
import { DiscountType } from '@app/redux/enums/discount-type.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timer } from 'rxjs';
import { fabTransition } from '@app/fab.animations';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-coupons',
	animations: [fabTransition],
	templateUrl: './coupons.component.pug',
	styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

	coupons$;
	discountType = DiscountType;

	showFab = false;

	createCouponForm = this.fb.group({
		discountType: this.discountType.Percentage,
		percentageValue: 0,
		fixedValue: 0,
	});

	get discountTypeControl() {
		return this.createCouponForm.get('discountType');
	}

	get percentageValue() {
		return this.createCouponForm.get('percentageValue');
	}

	get fixedValue() {
		return this.createCouponForm.get('fixedValue');
	}

	constructor(
		private store: Store<AppState>,
		private fb: FormBuilder,
		private modalService: NgbModal) { }

	ngOnInit() {
		this.coupons$ = this.store.select(fromCoupons.selectAll);
		this.store.dispatch(new ListCoupon());
		// animation delay
		timer(500 + 200).toPromise().then(() => this.showFab = true);
	}

	@ViewChild('createCouponModal') createCouponModal;

	showCreateCoupon() {
		this.modalService.open(this.createCouponModal, { size: 'lg' });
	}

	getFabState() {
		return this.showFab ? 'show' : 'hide';
	}

	createRepeat: number = 0;

	createCouponCheck(close) {

		const discountType = this.discountTypeControl.value;

		this.store.dispatch(new CreateCoupon({
			data: {
				discountType,
				...discountType == DiscountType.Fixed && {
					value: this.fixedValue.value,
				},
				...discountType == DiscountType.Percentage && {
					value: this.percentageValue.value,
				}
			},
			repeat: this.createRepeat,
		}));

		this.store.select(fromCoupons.selectSuccess)
			.pipe(
				take(1)
			).subscribe(() => {
				close();
			}, () => { });
	}

}
