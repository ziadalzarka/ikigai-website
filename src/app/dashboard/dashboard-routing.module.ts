import { OverviewGuard } from '@app/dashboard/overview.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '@app/dashboard/login.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: 'app/dashboard/login/login.module#LoginModule',
		canActivate: [LoginGuard],
		data: {
			state: 'dashboard-login'
		}
	},
	{
		path: '',
		loadChildren: 'app/dashboard/overview/overview.module#OverviewModule',
		canActivate: [OverviewGuard],
		data: {
			state: 'dashboard-overview'
		}
	}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
