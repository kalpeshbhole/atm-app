import { TestBed } from '@angular/core/testing';

import { AtmModuleService } from './atm-module.service';

describe('AtmModuleService', () => {
  let service: AtmModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
