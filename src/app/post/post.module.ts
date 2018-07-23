import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [PostThumbnailComponent],
	exports: [PostThumbnailComponent]
})
export class PostModule { }
