import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { QuestionComponent } from './question/question.component';
import { GlobalModule } from '@app/global/global.module';

@NgModule({
	imports: [
		CommonModule,
		ContactRoutingModule,
		GlobalModule
	],
	declarations: [QuestionComponent]
})
export class ContactModule { }
