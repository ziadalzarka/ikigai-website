import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobApplicationComponent } from './job-application/job-application.component';
import { GlobalModule } from '@app/global/global.module';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

@NgModule({
	imports: [
		CommonModule,
		JobRoutingModule,
		GlobalModule,
		ReactiveFormsModule,
		NgbModule,
	],
	declarations: [JobApplicationComponent],
	providers: [NgbModal, NgbModalStack]
})
export class JobModule { }
