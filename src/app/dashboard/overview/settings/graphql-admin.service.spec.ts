import { TestBed, inject } from '@angular/core/testing';

import { GraphqlAdminService } from './graphql-admin.service';

describe('GraphqlAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlAdminService]
    });
  });

  it('should be created', inject([GraphqlAdminService], (service: GraphqlAdminService) => {
    expect(service).toBeTruthy();
  }));
});
