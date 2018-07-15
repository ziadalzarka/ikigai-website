import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { EditEmailsComponent } from './edit-emails/edit-emails.component';

@NgModule({
	imports: [
		CommonModule,
		SettingsRoutingModule
	],
	declarations: [EditFooterComponent, EditEmailsComponent]
})
export class SettingsModule { }
