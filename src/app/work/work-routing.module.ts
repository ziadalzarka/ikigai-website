import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkApplicationComponent } from '@app/work/work-application/work-application.component';

const routes: Routes = [
	{
		path: '',
		component: WorkApplicationComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WorkRoutingModule { }
