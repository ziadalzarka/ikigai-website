import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/redux/app.state';
import * as fromUser from '@app/redux/reducers/user.reducer';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '@app/redux/models/user.model';
import { LoginUser } from '@app/redux/actions/user.actions';
import { of } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.pug',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loading;
	failed = of(false);

	loginForm = new FormGroup({
		username: new FormControl('', [
			Validators.required,
		]),
		password: new FormControl('', [
			Validators.required
		]),
	});

	get user() {
		return this.loginForm.value as User;
	}

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.loading = this.store.select(fromUser.selectLoading);
		this.failed = this.store.select(fromUser.selectLoginFailed);
	}

	login() {
		this.store.dispatch(new LoginUser(this.user));
	}
}
