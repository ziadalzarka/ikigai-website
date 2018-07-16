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
	path: 'edit',
	component: EditPostComponent,
	data: {
		state: 'edit'
	}
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentRoutingModule { }
