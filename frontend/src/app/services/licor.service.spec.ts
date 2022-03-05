import { TestBed } from '@angular/core/testing';

import { LicorService } from './licor.service';

describe('LicorService', () => {
  let service: LicorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
