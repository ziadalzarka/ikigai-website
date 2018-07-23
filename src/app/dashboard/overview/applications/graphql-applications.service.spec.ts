import { TestBed, inject } from '@angular/core/testing';

import { GraphqlApplicationsService } from './graphql-applications.service';

describe('GraphqlApplicationsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GraphqlApplicationsService]
		});
	});

	it('should be created', inject([GraphqlApplicationsService], (service: GraphqlApplicationsService) => {
		expect(service).toBeTruthy();
	}));
});
