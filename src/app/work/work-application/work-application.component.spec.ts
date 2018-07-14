import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkApplicationComponent } from './work-application.component';

describe('ApplicationComponent', () => {
	let component: WorkApplicationComponent;
	let fixture: ComponentFixture<WorkApplicationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WorkApplicationComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WorkApplicationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
