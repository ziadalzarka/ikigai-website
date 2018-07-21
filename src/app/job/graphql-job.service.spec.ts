import { TestBed, inject } from '@angular/core/testing';

import { GraphqlJobService } from './graphql-job.service';

describe('GraphqlJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlJobService]
    });
  });

  it('should be created', inject([GraphqlJobService], (service: GraphqlJobService) => {
    expect(service).toBeTruthy();
  }));
});
