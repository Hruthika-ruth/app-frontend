import { TestBed } from '@angular/core/testing';

import { BirthregService } from './birthreg.service';

describe('BirthregService', () => {
  let service: BirthregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
