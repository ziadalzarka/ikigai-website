import { ClientsComponent } from './clients/clients.component';
import { JobsComponent } from './jobs/jobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: 'jobs',
	component: JobsComponent,
	data: {
		state: 'jobs'
	}
}, {
	path: 'clients',
	component: ClientsComponent,
	data: {
		state: 'clients'
	}
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
