import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: 'posts',
	component: PostsComponent
}, {
	path: 'edit',
	component: EditPostComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContentRoutingModule { }
