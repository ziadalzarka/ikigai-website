import { GraphqlClientService } from './../graphql-client.service';
import { ClientApplication } from '@app/redux/models/client-application.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Package } from '@app/redux/enums/package.enum';
import { merge, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

	packagesMins = {
		[Package.Light]: {
			postsPerMonth: 0,
			gifs: 0,
			videos: 0,
		},
		[Package.Pro]: {
			postsPerMonth: 30,
			gifs: 1,
			videos: 0,
		},
		[Package.Enterprise]: {
			postsPerMonth: 60,
			gifs: 3,
			videos: 1,
		},
	};

	packages = {
		[Package.Light]: {
			postsPerMonth: 30,
			gifs: 1,
			videos: 0,
		},
		[Package.Pro]: {
			postsPerMonth: 60,
			gifs: 3,
			videos: 1,
		},
		[Package.Enterprise]: {
			postsPerMonth: 120,
			gifs: 5,
			videos: 3,
		}
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
		package: Package.Light,
		// ----
		totalPrice: 0,
		dealYears: 1,
		photography: 0,
		videoMinutesCount: 1,
		...this.packages[Package.Light]
	});

	get clientApplication(): ClientApplication {
		return this.clientApplicationForm.value as ClientApplication;
	}

	prices = {
		post: 70,
		videoMinute: 1000,
		photo: 25,
		gif: 100,
	};

	pricePerMonth = 0;
	discount = 0;

	calculatePrice() {
		let totalPrice = 0;
		totalPrice += this.clientApplication.postsPerMonth * this.prices.post;
		totalPrice +=
			this.clientApplication.videos *
			this.clientApplication.videoMinutesCount *
			this.prices.videoMinute;
		totalPrice += this.clientApplication.photography * this.prices.photo;
		totalPrice += this.clientApplication.gifs * this.prices.gif;

		this.pricePerMonth = totalPrice;

		totalPrice *= 12 * this.clientApplication.dealYears;

		totalPrice -= this.calculateDiscount();

		this.clientApplicationForm.patchValue({ totalPrice });
	}

	calculateDiscount() {
		const application = this.clientApplication;
		if (application.dealYears > 1) {
			switch (application.package) {
				case Package.Pro:
					return this.discount = 500 * application.dealYears * 12;
				case Package.Enterprise:
					return this.discount = 1000 * application.dealYears * 12;
			}
		}
		return this.discount = 0;
	}

	determinePackage() {
		let packKey = Package.Light;
		for (const packageKey in this.packages) {
			if (this.packages.hasOwnProperty(packageKey)) {

				const pack = this.packages[packageKey];
				const application = this.clientApplication;

				for (const key in pack) {
					if (pack.hasOwnProperty(key) && application.hasOwnProperty(key)) {

						if (application[key] >= pack[key]) {
							packKey = packageKey;
						}

					}
				}

			}
		}
		this.clientApplicationForm.patchValue({
			package: packKey
		});
	}

	setPackage() {
		this.clientApplicationForm.patchValue(this.packages[this.clientApplication.package.toString()]);
		this.calculatePrice();
	}

	updatePriceAndPackages() {
		this.determinePackage();
		this.calculatePrice();
	}

	constructor(
		private fb: FormBuilder,
		private clientService: GraphqlClientService,
		private modalService: NgbModal
	) {
	}

	ngOnInit() {
		loadMaterialize();
		this.updatePriceAndPackages();
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
