import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [FooterComponent, LoaderComponent],
	exports: [FooterComponent, LoaderComponent]
})
export class GlobalModule { }
