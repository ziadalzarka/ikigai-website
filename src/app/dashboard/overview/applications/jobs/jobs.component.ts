import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
	GraphqlApplicationsService
} from '@app/dashboard/overview/applications/graphql-applications.service';
import { environment } from 'environments/environment.prod';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.pug',
	styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

	jobApplications$;
	selectedApplication;
	storage = environment.storage;
	constructor(
		private applicationsService: GraphqlApplicationsService,
		private modalService: NgbModal,
	) { }

	ngOnInit() {
		this.jobApplications$ = this.applicationsService.listJobApplications();
	}

	@ViewChild('showJobApplication') showJobApplication;

	openApplication(application) {
		this.selectedApplication = application;
		this.modalService.open(this.showJobApplication, { size: 'lg' });
	}

}
