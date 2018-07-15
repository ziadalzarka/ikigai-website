import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '@app/global/notfound/notfound.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadChildren: 'app/home/home.module#HomeModule',
		data: {
			state: 'home'
		}
	},
	{
		path: 'client',
		loadChildren: 'app/client/client.module#ClientModule',
		data: {
			state: 'client'
		}
	},
	{
		path: 'work',
		loadChildren: 'app/work/work.module#WorkModule',
		data: {
			state: 'work'
		}
	},
	{
		path: 'contact',
		loadChildren: 'app/contact/contact.module#ContactModule',
		data: {
			state: 'contact'
		}
	},
	{
		path: 'dashboard',
		loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
		data: {
			state: 'dashboard'
		}
	},
	{
		path: '404',
		component: NotfoundComponent
	},
	{ path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
