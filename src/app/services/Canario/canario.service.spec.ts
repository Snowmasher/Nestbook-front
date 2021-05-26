import { TestBed } from '@angular/core/testing';

import { CanarioService } from './canario.service';

describe('CanarioServiceService', () => {
  let service: CanarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
