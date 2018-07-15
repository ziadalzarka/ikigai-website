import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ContentRoutingModule } from './content-routing.module';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot()
	],
	declarations: [PostsComponent, EditPostComponent]
})
export class ContentModule { }
