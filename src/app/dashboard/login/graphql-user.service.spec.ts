import { TestBed, inject } from '@angular/core/testing';

import { GraphqlUserService } from './graphql-user.service';

describe('GraphqlLoginService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GraphqlUserService]
		});
	});

	it('should be created', inject([GraphqlUserService], (service: GraphqlUserService) => {
		expect(service).toBeTruthy();
	}));
});
