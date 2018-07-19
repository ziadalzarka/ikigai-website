import { GraphqlUserService } from '@app/dashboard/login/graphql-user.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { userReducer } from '@app/redux/reducers/user.reducer';

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		ReactiveFormsModule,
		StoreModule.forFeature('user', userReducer)
	],
	providers: [GraphqlUserService],
	declarations: [LoginComponent]
})
export class LoginModule { }
