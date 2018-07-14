import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditFooterComponent } from './edit-footer/edit-footer.component';

@NgModule({
	imports: [
		CommonModule,
		SettingsRoutingModule
	],
	declarations: [EditFooterComponent]
})
export class SettingsModule { }
