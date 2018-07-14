import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
	ClientApplicationComponent
} from '@app/client/client-application/client-application.component';

describe('ClientApplicationComponent', () => {
	let component: ClientApplicationComponent;
	let fixture: ComponentFixture<ClientApplicationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ClientApplicationComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ClientApplicationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
