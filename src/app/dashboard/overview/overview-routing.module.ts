import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: OverviewComponent,
	children: [
		{
			path: 'content',
			loadChildren: './content/content.module#ContentModule'
		},
		{
			path: 'settings',
			loadChildren: './settings/settings.module#SettingsModule'
		},
		{
			path: 'applications',
			loadChildren: './applications/applications.module#ApplicationsModule'
		}
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OverviewRoutingModule { }
