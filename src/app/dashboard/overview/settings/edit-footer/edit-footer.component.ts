import { FooterVariables } from '@app/redux/models/variables.model';
import { AppState } from '@app/redux/app.state';
import { GraphqlAdminService } from './../graphql-admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as formFooter from '@app/redux/reducers/admin-footer.reducer';
import { UpdateFooterVariables, GetFooterVariables } from '@app/redux/actions/admin-footer.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-edit-footer',
	templateUrl: './edit-footer.component.pug',
	styleUrls: ['./edit-footer.component.css']
})
export class EditFooterComponent implements OnInit {

	footerVariablesForm = this.fb.group({
		email: '',
		phone1: '',
		phone2: '',
		address: '',
		facebook: '',
		linkedIn: '',
		instagram: '',
		additionalTitle: '',
		additionalBody: '',
	});

	loading$;
	failed$;

	get footerVariables() {
		return this.footerVariablesForm.value;
	}

	set footerVariables(value) {
		this.footerVariablesForm.patchValue(value);
	}

	constructor(
		private fb: FormBuilder,
		private store: Store<AppState>,
		private modalService: NgbModal) { }

	@ViewChild('updateSuccess') updateSuccess;
	@ViewChild('updateFailed') updateFailed;

	ngOnInit() {
		this.store.dispatch(new GetFooterVariables());

		this.loading$ = this.store.select(formFooter.selectLoading);
		this.failed$ = this.store.select(formFooter.selectFailed);

		this.store.select(formFooter.selectVariables).subscribe((vars) => {
			this.footerVariables = vars;
		}, () => { });

		this.store.select(formFooter.selectSuccess).subscribe((success) => {
			if (success) {
				this.modalService.open(this.updateSuccess);
			}
		}, () => { });

		this.store.select(formFooter.selectFailed).subscribe((failed) => {
			if (failed) {
				this.modalService.open(this.updateFailed);
			}
		}, () => { });
	}

	save() {
		this.store.dispatch(new UpdateFooterVariables(this.footerVariables as FooterVariables));
	}
}
