import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JobApplication } from '@app/redux/models/job-application.model';
import { JobPosition } from '@app/redux/enums/job-position.enum';
import { UploadService } from '@app/global/upload.service';

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

	get jobApplication() {
		return {
			...this.jobApplicationForm.value,
			...this.getPositionsFromForm(this.jobApplicationForm.controls.positions as FormGroup)
		};
	}

	constructor(private fb: FormBuilder, private uploadService: UploadService) { }

	ngOnInit() {
	}

	async send(resumeFile) {
		let resumeFileId = null;

		if (resumeFile) {
			resumeFileId = await this.uploadService.upload(resumeFile);
		}
	}

}
