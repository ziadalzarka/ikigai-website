import { NavitemDirective } from './navitem.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
	imports: [
		CommonModule,
		OverviewRoutingModule
	],
	declarations: [OverviewComponent, NavitemDirective]
})
export class OverviewModule { }
