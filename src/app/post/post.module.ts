import { GlobalModule } from './../global/global.module';
import { QuillModule } from 'ngx-quill';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostComponent } from './post/post.component';
import { PostRoutingModule } from '@app/post/post-routing.module';

@NgModule({
	imports: [
		CommonModule,
		PostRoutingModule,
		QuillModule,
		GlobalModule,
	],
	declarations: [PostThumbnailComponent, PostComponent],
	exports: [PostThumbnailComponent, PostComponent]
})
export class PostModule { }
