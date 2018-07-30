import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from '@app/client/client-routing.module';
import {
	ClientApplicationComponent
} from '@app/client/client-application/client-application.component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { clientApplicationsReducer } from '@app/redux/reducers/client-applications.reducer';

@NgModule({
	imports: [
		CommonModule,
		ClientRoutingModule,
		GlobalModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule,
	],
	declarations: [ClientApplicationComponent],
	providers: [NgbModal, NgbModalStack]
})
export class ClientModule { }
