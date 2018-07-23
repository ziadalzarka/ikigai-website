import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientApplication } from '@app/redux/models/client-application.model';
import {
	ListClientApplications,
	GetClientApplication
} from '@app/redux/actions/client-applications.actions';
import { AppState } from '@app/redux/app.state';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromClientApplications from '@app/redux/reducers/client-applications.reducer';

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.pug',
	styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

	clientApplications$;
	selectedApplication$;

	constructor(
		private store: Store<AppState>,
		private modalService: NgbModal
	) { }

	@ViewChild('showClientApplication') showClientApplication;

	ngOnInit() {
		this.clientApplications$ = this.store.select(fromClientApplications.selectAll);
		this.selectedApplication$ = this.store.select(fromClientApplications.selectedApplication);
		this.store.dispatch(new ListClientApplications());
	}

	openApplication(application: ClientApplication) {
		this.store.dispatch(new GetClientApplication(application.id));
		this.modalService.open(this.showClientApplication, { size: 'lg' });
	}

}
