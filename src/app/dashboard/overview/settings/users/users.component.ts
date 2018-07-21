import { Permissions } from '@app/redux/enums/permission.enum';
import { AppState } from '@app/redux/app.state';
import { fabTransition } from '@app/fab.animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromAdminUsers from '@app/redux/reducers/admin-users.reducer';
import { User } from '@app/redux/models/user.model';
import {
	ListUsers,
	DeleteUser,
	AddUser,
	LoginAsUser,
	ChangeUserPermissions
} from '@app/redux/actions/admin-users.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
	selector: 'app-users',
	animations: [fabTransition],
	templateUrl: './users.component.pug',
	styleUrls: ['./users.component.css']
})
export class UsersComponent {

	showFab = false;
	users: Observable<User[]>;

	selectedUser: string = null;

	changeUserPermissionsForm = this.fb.group({
		admin: false,
		posts: false,
		clientApplications: false,
		jobApplications: false,
		contactApplications: false
	});

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

	getPermissionsFromForm(form: FormGroup) {
		const {
			admin,
			posts,
			clientApplications,
			jobApplications,
			contactApplications } = form.value;
		return {
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

	get userForm() {
		const {
			name,
			username,
			password } = this.addUserForm.value;
		return {
			name,
			username,
			password,
			...this.getPermissionsFromForm(this.addUserForm)
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
			this.store.dispatch(new AddUser(this.userForm as Partial<User>));
			close();
		}
	}

	changeUserPermissionsOpen(content, user) {
		this.selectedUser = user.name;
		this.changeUserPermissionsForm = this.fb.group({
			admin: user.permissions.includes(Permissions.Admin),
			posts: user.permissions.includes(Permissions.Posts),
			clientApplications: user.permissions.includes(Permissions.ClientApplications),
			jobApplications: user.permissions.includes(Permissions.JobApplications),
			contactApplications: user.permissions.includes(Permissions.ContactApplications)
		});
		this.open(content).then(() => {
			this.store.dispatch(new ChangeUserPermissions({
				id: user.id,
				...this.getPermissionsFromForm(this.changeUserPermissionsForm)
			}));
		}, () => { });
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
