import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkApplicationComponent } from './work-application/work-application.component';
import { GlobalModule } from '@app/global/global.module';

@NgModule({
	imports: [
		CommonModule,
		WorkRoutingModule,
		GlobalModule
	],
	declarations: [WorkApplicationComponent]
})
export class WorkModule { }
