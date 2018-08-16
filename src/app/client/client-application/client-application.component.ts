import { GraphqlClientService } from './../graphql-client.service';
import { ClientApplication } from '@app/redux/models/client-application.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Package } from '@app/redux/enums/package.enum';
import { merge, map, tap, skip, finalize, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeoService } from '@app/seo.service';
import { Coupon } from '@app/redux/models/coupon.model';
import { DiscountType } from '@app/redux/enums/discount-type.enum';
import Cashier, { getPackagesQuotas } from 'utils/cashier';
import { PublicContentService } from '@app/global/public-content.service';

declare var loadMaterialize: any;

@Component({
	selector: 'app-client-application',
	templateUrl: './client-application.component.pug',
	styleUrls: ['./client-application.component.css']
})
export class ClientApplicationComponent implements OnInit {

	@ViewChild('successful') submissionSuccessful;
	@ViewChild('failed') submissionFailed;

	private cashier = new Cashier();

	Package = Package;

	clientApplicationForm = this.fb.group({
		name: '',
		phoneNumber: '',
		email: '',
		address: '',
		facebook: '',
		website: true,
		hasHost: false,
		hasDomain: false,
		totalPrice: 0,
		dealMonths: 12,
		videoMinutesCount: 1,
		coupon: '',
		// -----------
		package: Package.Light,
		...this.cashier.quotas[Package.Light]
	});

	get coupon(): string {
		return this.clientApplicationForm.get('coupon').value;
	}

	get clientApplication(): ClientApplication {
		return this.clientApplicationForm.value as ClientApplication;
	}

	pricePerMonth = 0;
	discount = 0;

	calculatePrice() {
		this.pricePerMonth = this.cashier.calculateMonthlyPrice(this.clientApplication).value;

		let totalPrice = this.pricePerMonth;

		totalPrice *= this.clientApplication.dealMonths;

		this.discount = this.cashier
			.calculateDiscount(this.clientApplication, this.activeCoupon, totalPrice).value;

		totalPrice -= this.discount;

		this.clientApplicationForm.patchValue({ totalPrice });
	}

	patchPackage() {
		this.clientApplicationForm.patchValue(
			this.cashier.quotas[this.clientApplication.package.toString()]
		);
	}

	onPackageChanged() {
		if (this.clientApplication.package != Package.Custom) {
			this.patchPackage();
		}
		this.calculatePrice();
	}

	onMediaChanged(isolated = false) {
		if (!isolated) {
			this.clientApplicationForm.patchValue({
				package: Package.Custom
			});
		}
		this.calculatePrice();
	}

	onDealMonthsChanged() {
		this.calculatePrice();
	}

	couponLoading = false;
	couponInvalid = false;

	activeCoupon: Coupon;

	onCouponChanged() {
		this.couponLoading = true;
		this.couponInvalid = false;
		this.activeCoupon = null;

		const invalidate = () => {
			this.couponInvalid = true;
			this.calculatePrice();
		};

		this.clientService.checkCoupon(this.coupon)
			.pipe(
				finalize(() => this.couponLoading = false)
			).subscribe(cop => {
				if (cop) {
					this.activeCoupon = cop;
					this.calculatePrice();
				} else {
					invalidate();
				}
			}, invalidate);
	}

	constructor(
		private fb: FormBuilder,
		private clientService: GraphqlClientService,
		private modalService: NgbModal,
		private seoService: SeoService,
		private publicContent: PublicContentService
	) { }

	loaded = false;

	ngOnInit() {
		loadMaterialize();
		this.calculatePrice();

		this.seoService.generateTags({
			title: 'Hire Ikigai',
		});

		this.publicContent.applicationSettingsQuery().pipe(take(1)).subscribe(
			(settings) => {
				this.loaded = true;

				this.cashier = new Cashier(settings, getPackagesQuotas(settings));
			}
		);
	}

	markAsDirty() {
		this.clientApplicationForm.controls.name.markAsDirty();
		this.clientApplicationForm.controls.email.markAsDirty();
	}

	send() {
		this.clientApplicationForm.updateValueAndValidity();
		this.markAsDirty();

		if (this.clientApplicationForm.invalid) return;

		this.clientService.applyClient(this.clientApplication).subscribe(
			() => this.modalService.open(this.submissionSuccessful),
			() => this.modalService.open(this.submissionFailed)
		);
	}

}
