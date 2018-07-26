import { NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { PostModule } from './../post/post.module';
import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

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
	],
	providers: [NgbPaginationConfig]
})
export class HomeModule { }
