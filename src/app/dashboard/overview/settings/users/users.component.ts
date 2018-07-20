import { AppState } from './../../../../redux/app.state';
import { fabTransition } from './../../../../fab.animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromAdminUsers from '@app/redux/reducers/admin-users.reducer';
import { User } from '@app/redux/models/user.model';
import { ListUsers, DeleteUser, AddUser, LoginAsUser } from '@app/redux/actions/admin-users.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Permissions } from 'utils/utils';

@Component({
	selector: 'app-users',
	animations: [fabTransition],
	templateUrl: './users.component.pug',
	styleUrls: ['./users.component.css']
})
export class UsersComponent {

	showFab = false;
	users: Observable<User[]>;

	addUserForm = this.fb.group({
		name: ['', Validators.required],
		username: ['', Validators.required],
		password: ['', [Validators.required, Validators.minLength(8)]],
		admin: true,
		posts: true,
		clientApplications: true,
		jobApplications: true,
		contactApplications: true
	});

	get userForm() {
		const {
			name,
			username,
			password,
			admin,
			posts,
			clientApplications,
			jobApplications,
			contactApplications } = this.addUserForm.value;
		return {
			name,
			username,
			password,
			permissions: [
				...(admin ? [Permissions.Admin] : [
					...(posts ? [Permissions.Posts] : []),
					...(clientApplications ? [Permissions.ClientApplications] : []),
					...(jobApplications ? [Permissions.JobApplications] : []),
					...(contactApplications ? [Permissions.ContactApplications] : [])
				])
			]
		};
	}

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private store: Store<AppState>,
		private modalService: NgbModal,
		private fb: FormBuilder) {

		this.users = this.store.select(fromAdminUsers.selectAll);
		this.store.dispatch(new ListUsers());
		// animation delay
		timer(500 + 200).toPromise().then(() => this.showFab = true);
	}

	createForm(arg, validators): FormGroup {
		const input = arg;
		for (const validatorKey in validators) {
			if (validators.hasOwnProperty(validatorKey)) {
				if (input.hasOwnProperty(validatorKey)) {
					input[validatorKey] = [arg[validatorKey], ...validators[validatorKey]];
				}
			}
		}
		return this.fb.group(arg);
	}

	getFabState() {
		return this.showFab ? 'show' : 'hide';
	}

	open(content, lg = false) {
		return this.modalService.open(content, { ...lg && { size: 'lg' } }).result;
	}

	addUserOpen(content) {
		this.open(content, true);
	}

	addUserCheck(close) {
		this.addUserForm.updateValueAndValidity();
		if (!this.addUserForm.invalid) {
			this.store.dispatch(new AddUser(this.userForm as User));
			close();
		}
	}

	loginAs(user) {
		this.store.dispatch(new LoginAsUser(user.id));
	}

	deleteUserOpen(content, id) {
		this.open(content).then(() => {
			this.store.dispatch(new DeleteUser(id));
		});
	}
}
