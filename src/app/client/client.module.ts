import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from '@app/client/client-routing.module';
import {
	ClientApplicationComponent
} from '@app/client/client-application/client-application.component';

@NgModule({
	imports: [
		CommonModule,
		ClientRoutingModule,
		GlobalModule
	],
	declarations: [ClientApplicationComponent]
})
export class ClientModule { }
