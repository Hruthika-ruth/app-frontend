import { TestBed } from '@angular/core/testing';

import { DeathregService } from './deathreg.service';

describe('DeathregService', () => {
  let service: DeathregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeathregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
