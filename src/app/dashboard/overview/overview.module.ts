import { GlobalModule } from '@app/global/global.module';
import { NavitemDirective } from './navitem.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

@NgModule({
	imports: [
		CommonModule,
		OverviewRoutingModule,
		GlobalModule,
		NgbModule
	],
	declarations: [OverviewComponent, NavitemDirective],
	providers: [NgbModal, NgbModalStack]
})
export class OverviewModule { }
