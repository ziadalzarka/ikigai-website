import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostModule } from './../post/post.module';
import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		GlobalModule,
		PostModule,
		NgbModule,
		ReactiveFormsModule,
		ScrollToModule.forRoot(),
	],
	providers: [NgbPaginationConfig, NgbModalStack, NgbModal]
})
export class HomeModule { }
