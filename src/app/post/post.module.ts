import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostComponent } from './post/post.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [PostThumbnailComponent, PostComponent],
	exports: [PostThumbnailComponent, PostComponent]
})
export class PostModule { }
