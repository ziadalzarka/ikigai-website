import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JobApplication } from '@app/redux/models/job-application.model';
import { JobPosition } from '@app/redux/enums/job-position.enum';
import { UploadService } from '@app/global/upload.service';
import { GraphqlJobService } from '@app/job/graphql-job.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

enum Position {
	Media,
	Graphics,
	Photography,
	PublicRelations
}

@Component({
	selector: 'app-job-application',
	templateUrl: './job-application.component.pug',
	styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

	loading;

	positionsValidator = (form) => {
		if (!form.controls.media.value &&
			!form.controls.graphics.value &&
			!form.controls.photography.value &&
			!form.controls.pb.value) {
			return { positions: 'A position has to be selected' };
		}
		return null;
	}

	jobApplicationForm = this.fb.group({
		firstName: '',
		middleName: '',
		lastName: '',
		email: '',
		address: '',
		phoneNumber: '',
		// positions
		positions: this.fb.group({
			media: true,
			graphics: false,
			photography: false,
			pb: false,
		}, { validator: this.positionsValidator }),
		// additionals
		resume: null,
		linkedIn: ''
	});

	getPositionsFromForm(form: FormGroup) {
		const {
			media,
			graphics,
			photography,
			pb } = form.value;
		return {
			positions: [
				...(media ? [JobPosition.Media] : []),
				...(graphics ? [JobPosition.Graphics] : []),
				...(photography ? [JobPosition.Photography] : []),
				...(pb ? [JobPosition.PublicRelations] : [])
			]
		};
	}

	get jobApplication(): JobApplication {
		return {
			...this.jobApplicationForm.value,
			...this.getPositionsFromForm(this.jobApplicationForm.controls.positions as FormGroup)
		};
	}

	@ViewChild('successful') submissionSuccessful;
	@ViewChild('failed') submissionFailed;

	constructor(
		private fb: FormBuilder,
		private uploadService: UploadService,
		private jobService: GraphqlJobService,
		private modalService: NgbModal) { }

	ngOnInit() {
	}

	markDirty() {
		this.jobApplicationForm.controls.firstName.markAsDirty();
		this.jobApplicationForm.controls.middleName.markAsDirty();
		this.jobApplicationForm.controls.lastName.markAsDirty();
		this.jobApplicationForm.controls.email.markAsDirty();
	}

	async send(resumeFile) {

		this.jobApplicationForm.updateValueAndValidity();
		this.markDirty();

		if (this.jobApplicationForm.invalid) return;

		let resumeFileId = null;
		this.loading = true;

		if (resumeFile) {
			resumeFileId = await this.uploadService.getUploadId(resumeFile);
		}

		this.jobService.applyForJob(
			{ ...this.jobApplication, resumeFileId }
		).subscribe(() => {
			this.modalService.open(this.submissionSuccessful, { size: 'lg' });
		}, () => {
			this.modalService.open(this.submissionFailed, { size: 'lg' });
		});
	}

}
