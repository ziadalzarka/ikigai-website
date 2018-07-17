import { TestBed, inject } from '@angular/core/testing';

import { GraphqlLoginService } from './graphql-login.service';

describe('GraphqlLoginService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GraphqlLoginService]
		});
	});

	it('should be created', inject([GraphqlLoginService], (service: GraphqlLoginService) => {
		expect(service).toBeTruthy();
	}));
});
