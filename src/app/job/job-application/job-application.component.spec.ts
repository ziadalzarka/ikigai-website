import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationComponent } from '@app/job/job-application/job-application.component';

describe('ApplicationComponent', () => {
	let component: JobApplicationComponent;
	let fixture: ComponentFixture<JobApplicationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JobApplicationComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JobApplicationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
