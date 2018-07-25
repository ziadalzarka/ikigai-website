import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: 'posts',
	component: PostsComponent,
	data: {
		state: 'posts'
	}
}, {
	path: 'new',
	component: EditPostComponent,
	data: {
		state: 'new_post'
	}
}, {
	path: 'edit/:id',
	component: EditPostComponent,
	data: {
		state: 'edit_post'
	}
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentRoutingModule { }
