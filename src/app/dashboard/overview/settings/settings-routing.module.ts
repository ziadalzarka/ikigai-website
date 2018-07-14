import { EditFooterComponent } from './edit-footer/edit-footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: 'footer',
	component: EditFooterComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SettingsRoutingModule { }
