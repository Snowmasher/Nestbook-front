import { TestBed } from '@angular/core/testing';

import { CanarioServiceService } from './canario-service.service';

describe('CanarioServiceService', () => {
  let service: CanarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
