import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
	],
	declarations: [PostsComponent, EditPostComponent],
	providers: [NgbModal, NgbModalStack]
})
export class ContentModule { }
