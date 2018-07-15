import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { EditEmailsComponent } from './edit-emails/edit-emails.component';
import { UsersComponent } from './users/users.component';

@NgModule({
	imports: [
		CommonModule,
		SettingsRoutingModule,
	],
	declarations: [EditFooterComponent, EditEmailsComponent, UsersComponent]
})
export class SettingsModule { }
