import { TestBed, inject } from '@angular/core/testing';

import { PublicContentService } from './public-content.service';

describe('PublicContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicContentService]
    });
  });

  it('should be created', inject([PublicContentService], (service: PublicContentService) => {
    expect(service).toBeTruthy();
  }));
});
