import { TestBed, inject } from '@angular/core/testing';

import { GraphqlClientService } from './graphql-client.service';

describe('GraphqlClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlClientService]
    });
  });

  it('should be created', inject([GraphqlClientService], (service: GraphqlClientService) => {
    expect(service).toBeTruthy();
  }));
});
