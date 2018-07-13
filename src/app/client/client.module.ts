import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { ClientRoutingModule } from '@app/client/client-routing.module';

@NgModule({
	imports: [
		CommonModule,
		ClientRoutingModule,
		GlobalModule
	],
	declarations: [ApplicationComponent]
})
export class ClientModule { }
