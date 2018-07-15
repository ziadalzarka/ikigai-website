import { EditEmailsComponent } from './edit-emails/edit-emails.component';
import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SettingsRoutingModule { }
