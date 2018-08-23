import { TestBed, inject } from '@angular/core/testing';

import { GraphqlContactService } from './graphql-contact.service';

describe('GraphqlContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlContactService]
    });
  });

  it('should be created', inject([GraphqlContactService], (service: GraphqlContactService) => {
    expect(service).toBeTruthy();
  }));
});
