import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PermissionsPipe } from '@app/global/permissions.pipe';
import { PackageColorPipe } from './package-color.pipe';
import { SafeHtmlPipe } from './safehtml.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { CouponPipe } from './coupon.pipe';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		FooterComponent,
		LoaderComponent,
		NotfoundComponent,
		PermissionsPipe,
		PackageColorPipe,
		SafeHtmlPipe,
		ToolbarComponent,
		CouponPipe,
	],
	exports: [
		FooterComponent,
		LoaderComponent,
		PermissionsPipe,
		PackageColorPipe,
		SafeHtmlPipe,
		ToolbarComponent,
		CouponPipe,
	]
})
export class GlobalModule { }
