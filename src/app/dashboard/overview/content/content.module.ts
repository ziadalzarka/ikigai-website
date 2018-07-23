import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ContentRoutingModule } from './content-routing.module';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from '@app/redux/reducers/posts.reducer';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot(),
		StoreModule.forFeature('posts', postsReducer),
		FormsModule,
	],
	declarations: [PostsComponent, EditPostComponent]
})
export class ContentModule { }
