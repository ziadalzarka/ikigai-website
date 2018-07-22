import { ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from '@app/client/client-routing.module';
import {
	ClientApplicationComponent
} from '@app/client/client-application/client-application.component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

@NgModule({
	imports: [
		CommonModule,
		ClientRoutingModule,
		GlobalModule,
		ReactiveFormsModule,
		NgbModule,
	],
	declarations: [ClientApplicationComponent],
	providers: [NgbModal, NgbModalStack]
})
export class ClientModule { }
