import { GlobalModule } from './../global/global.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';

@NgModule({
	declarations: [
		HomeComponent,
		PostThumbnailComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		GlobalModule
	]
})
export class HomeModule { }
