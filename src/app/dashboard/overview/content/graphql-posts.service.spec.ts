import { TestBed, inject } from '@angular/core/testing';

import { GraphqlPostsService } from './graphql-posts.service';

describe('GraphqlPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlPostsService]
    });
  });

  it('should be created', inject([GraphqlPostsService], (service: GraphqlPostsService) => {
    expect(service).toBeTruthy();
  }));
});
