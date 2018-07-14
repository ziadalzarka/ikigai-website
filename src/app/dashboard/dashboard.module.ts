import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule
	],
	declarations: [LoginComponent]
})
export class DashboardModule { }
