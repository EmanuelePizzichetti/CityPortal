import { TestBed } from '@angular/core/testing';

import { RisposteService } from './risposte.service';

describe('RisposteService', () => {
  let service: RisposteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisposteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
