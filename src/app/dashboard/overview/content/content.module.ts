import { PostModule } from './../../../post/post.module';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { NgbModule, NgbModal, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill'
import { ContentRoutingModule } from './content-routing.module';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from '@app/redux/reducers/posts.reducer';

@NgModule({
	imports: [
		CommonModule,
		ContentRoutingModule,
		QuillModule,
		StoreModule.forFeature('posts', postsReducer),
		FormsModule,
		NgbModule,
		PostModule,
	],
	declarations: [PostsComponent, EditPostComponent],
	providers: [NgbModal, NgbModalStack, NgbPaginationConfig]
})
export class ContentModule { }
