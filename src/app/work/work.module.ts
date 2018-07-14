import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkApplicationComponent } from './work-application/work-application.component';

@NgModule({
	imports: [
		CommonModule,
		WorkRoutingModule
	],
	declarations: [WorkApplicationComponent]
})
export class WorkModule { }
