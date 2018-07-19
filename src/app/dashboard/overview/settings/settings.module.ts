import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { EditEmailsComponent } from './edit-emails/edit-emails.component';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { adminUsersReducer } from '@app/redux/reducers/admin-users.reducer';
import { GlobalModule } from '@app/global/global.module';

@NgModule({
	imports: [
		CommonModule,
		SettingsRoutingModule,
		StoreModule.forFeature('adminUsers', adminUsersReducer),
		GlobalModule
	],
	declarations: [EditFooterComponent, EditEmailsComponent, UsersComponent]
})
export class SettingsModule { }
