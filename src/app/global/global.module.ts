import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PermissionsPipe } from '@app/global/permissions.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		FooterComponent,
		LoaderComponent,
		NotfoundComponent,
		PermissionsPipe,
	],
	exports: [
		FooterComponent,
		LoaderComponent,
		PermissionsPipe,
	]
})
export class GlobalModule { }
