import { GraphqlLoginService } from '@app/dashboard/login/graphql-login.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '@app/redux/effects/user.effects';
import { userReducer } from '@app/redux/reducers/user.reducer';

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		ReactiveFormsModule,
		// EffectsModule.forFeature([
		// 	UserEffects
		// ]),
		StoreModule.forFeature('user', userReducer)
	],
	providers: [GraphqlLoginService],
	declarations: [LoginComponent]
})
export class LoginModule { }
