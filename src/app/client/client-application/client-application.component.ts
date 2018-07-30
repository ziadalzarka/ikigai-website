import { GraphqlClientService } from './../graphql-client.service';
import { ClientApplication } from '@app/redux/models/client-application.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Package } from '@app/redux/enums/package.enum';
import { merge, map, tap, skip, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeoService } from '@app/seo.service';
import { Coupon } from '@app/redux/models/coupon.model';
import { DiscountType } from '@app/redux/enums/discount-type.enum';

declare var loadMaterialize: any;

@Component({
	selector: 'app-client-application',
	templateUrl: './client-application.component.pug',
	styleUrls: ['./client-application.component.css']
})
export class ClientApplicationComponent implements OnInit {

	@ViewChild('successful') submissionSuccessful;
	@ViewChild('failed') submissionFailed;

	Package = Package;

	packagesQuotas = {
		[Package.Light]: {
			postsPerMonth: 30,
			gifs: 1,
			videos: 0,
			photography: 0,
		},
		[Package.Pro]: {
			postsPerMonth: 60,
			gifs: 3,
			videos: 1,
			photography: 20,
		},
		[Package.Enterprise]: {
			postsPerMonth: 120,
			gifs: 5,
			videos: 3,
			photography: 100,
		},
		[Package.Custom]: {
			postsPerMonth: 0,
			gifs: 0,
			videos: 0,
			photography: 0,
		}
	};

	prices = {
		post: 70,
		videoMinute: 1000,
		photo: 25,
		gif: 100,
	};

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
		dealYears: 1,
		videoMinutesCount: 1,
		coupon: '',
		// -----------
		package: Package.Light,
		...this.packagesQuotas[Package.Light]
	});

	get coupon(): string {
		return this.clientApplicationForm.get('coupon').value;
	}

	get clientApplication(): ClientApplication {
		return this.clientApplicationForm.value as ClientApplication;
	}

	pricePerMonth = 0;
	discount = 0;

	calculateMonthlyPrice() {
		let price = 0;
		price += this.clientApplication.postsPerMonth * this.prices.post;
		price +=
			this.clientApplication.videos *
			this.clientApplication.videoMinutesCount *
			this.prices.videoMinute;
		price += this.clientApplication.photography * this.prices.photo;
		price += this.clientApplication.gifs * this.prices.gif;

		return price;
	}

	calculatePrice() {
		this.pricePerMonth = this.calculateMonthlyPrice();

		let totalPrice = this.pricePerMonth;

		totalPrice *= 12 * this.clientApplication.dealYears;

		totalPrice -= this.calculateDiscount(totalPrice);

		this.clientApplicationForm.patchValue({ totalPrice });
	}

	calculateDiscount(currentPrice) {
		const application = this.clientApplication;
		let discount = 0;

		if (application.dealYears > 1) {
			switch (application.package) {
				case Package.Pro:
					discount += 500 * application.dealYears * 12;
					break;
				case Package.Enterprise:
					discount += 1000 * application.dealYears * 12;
					break;
			}
		}

		if (this.activeCoupon) {
			switch (this.activeCoupon.discountType) {
				case DiscountType.Fixed:
					discount += this.activeCoupon.value;
					break;
				case DiscountType.Percentage:
					discount += currentPrice * (this.activeCoupon.value / 100);
					break;
			}
		}

		return this.discount = discount;
	}

	patchPackage() {
		this.clientApplicationForm.patchValue(
			this.packagesQuotas[this.clientApplication.package.toString()]
		);
	}

	onPackageChanged() {
		if (this.clientApplication.package != Package.Custom) {
			this.patchPackage();
		}
		this.calculatePrice();
	}

	onMediaChanged() {
		this.clientApplicationForm.patchValue({
			package: Package.Custom
		});
		this.calculatePrice();
	}

	onDealYearsChanged() {
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
		private seoService: SeoService) { }

	ngOnInit() {
		loadMaterialize();
		this.calculatePrice();

		this.seoService.generateTags({
			title: 'Hire Ikigai',
		});
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
