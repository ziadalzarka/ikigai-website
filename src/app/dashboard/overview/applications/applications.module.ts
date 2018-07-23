import { GlobalModule } from '@app/global/global.module';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';
import { DataTableModule } from 'angular-6-datatable';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

@NgModule({
	imports: [
		CommonModule,
		ApplicationsRoutingModule,
		DataTableModule,
		NgbModule,
		GlobalModule
	],
	declarations: [JobsComponent, ClientsComponent],
	providers: [NgbModal, NgbModalStack]
})
export class ApplicationsModule { }
