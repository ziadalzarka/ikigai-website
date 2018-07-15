import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: OverviewComponent,
	children: [
		{
			path: 'settings',
			loadChildren: './settings/settings.module#SettingsModule'
		}
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OverviewRoutingModule { }
