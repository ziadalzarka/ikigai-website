import { GraphqlAdminService } from '@app/dashboard/overview/settings/graphql-admin.service';
import { take } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicContentService } from '@app/global/public-content.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-prices',
	templateUrl: './prices.component.pug',
	styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

	settingsForm = this.fb.group({
		light_postsPerMonth: null,
		light_gifs: null,
		light_videos: null,
		light_photography: null,
		pro_postsPerMonth: null,
		pro_gifs: null,
		pro_videos: null,
		pro_photography: null,
		enterprise_postsPerMonth: null,
		enterprise_gifs: null,
		enterprise_videos: null,
		enterprise_photography: null,
		post: null,
		videoMinute: null,
		photo: null,
		gif: null,
	});

	constructor(
		private fb: FormBuilder,
		private publicContent: PublicContentService,
		private adminService: GraphqlAdminService,
		private modalService: NgbModal,
	) { }

	loaded = false;

	ngOnInit() {
		this.publicContent.applicationSettingsQuery().pipe(take(1)).subscribe(settings => {
			this.settingsForm.patchValue(settings);
			this.loaded = true;
		});
	}

	@ViewChild('updateSuccess') updateSuccess;
	@ViewChild('updateFailed') updateFailed;

	save() {
		this.adminService.updateApplicationSettings(this.settingsForm.value).pipe(
			take(1)
		).subscribe(
			() => this.modalService.open(this.updateSuccess),
			() => this.modalService.open(this.updateFailed));
	}

}
