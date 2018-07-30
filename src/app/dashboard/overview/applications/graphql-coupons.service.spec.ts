import { TestBed, inject } from '@angular/core/testing';

import { GraphqlCouponsService } from './graphql-coupons.service';

describe('GraphqlCouponsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlCouponsService]
    });
  });

  it('should be created', inject([GraphqlCouponsService], (service: GraphqlCouponsService) => {
    expect(service).toBeTruthy();
  }));
});
