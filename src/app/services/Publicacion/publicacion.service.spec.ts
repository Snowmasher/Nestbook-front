import { TestBed } from '@angular/core/testing';

import { PublicacionServiceService } from './publicacion.service';

describe('PublicacionServiceService', () => {
  let service: PublicacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
