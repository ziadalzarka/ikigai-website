import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobApplicationComponent } from '@app/job/job-application/job-application.component';
import { GlobalModule } from '@app/global/global.module';

@NgModule({
	imports: [
		CommonModule,
		JobRoutingModule,
		GlobalModule,
		ReactiveFormsModule
	],
	declarations: [JobApplicationComponent]
})
export class JobModule { }
