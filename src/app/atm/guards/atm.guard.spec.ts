import { TestBed } from '@angular/core/testing';

import { AtmGuard } from './atm.guard';

describe('AtmGuard', () => {
  let guard: AtmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AtmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
