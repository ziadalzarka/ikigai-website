import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationComponent } from '@app/job/job-application/job-application.component';

const routes: Routes = [
	{
		path: '',
		component: JobApplicationComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JobRoutingModule { }
