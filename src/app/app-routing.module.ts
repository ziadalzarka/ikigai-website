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
		path: 'job',
		loadChildren: 'app/job/job.module#JobModule',
		data: {
			state: 'job'
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
		path: 'post/:id',
		loadChildren: 'app/post/post.module#PostModule',
		data: {
			state: 'post'
		}
	},
	{ path: 'login', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'post', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
