import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: 'app/dashboard/login/login.module#LoginModule',
		data: {
			state: 'dashboard-login'
		}
	},
	{
		path: '',
		loadChildren: 'app/dashboard/overview/overview.module#OverviewModule',
		data: {
			state: 'dashboard-overview'
		}
	}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
