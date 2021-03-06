import { UsersComponent } from './users/users.component';
import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
	EditEmailsComponent
} from '@app/dashboard/overview/settings/edit-emails/edit-emails.component';
import { PricesComponent } from '@app/dashboard/overview/settings/prices/prices.component';

const routes: Routes = [{
	path: 'footer',
	component: EditFooterComponent,
	data: {
		state: 'footer'
	}
}, {
	path: 'emails',
	component: EditEmailsComponent,
	data: {
		state: 'emails'
	}
}, {
	path: 'users',
	component: UsersComponent,
	data: {
		state: 'users'
	}
}, {
	path: 'prices',
	component: PricesComponent,
	data: {
		state: 'prices'
	}
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SettingsRoutingModule { }
