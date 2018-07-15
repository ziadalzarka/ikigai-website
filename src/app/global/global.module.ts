import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [FooterComponent, LoaderComponent, NotfoundComponent],
	exports: [FooterComponent, LoaderComponent]
})
export class GlobalModule { }
