import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GlobalModule } from '@app/global/global.module';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';
import { DataTableModule } from 'angular-6-datatable';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { PositionsPipe } from './positions.pipe';
import { CouponsComponent } from './coupons/coupons.component';
import { couponsReducer } from '@app/redux/reducers/coupons.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
	imports: [
		CommonModule,
		ApplicationsRoutingModule,
		DataTableModule,
		NgbModule,
		GlobalModule,
		StoreModule.forFeature('coupons', couponsReducer),
		ReactiveFormsModule,
		FormsModule,
	],
	declarations: [JobsComponent, ClientsComponent, PositionsPipe, CouponsComponent],
	providers: [NgbModal, NgbModalStack]
})
export class ApplicationsModule { }
