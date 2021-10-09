import { TestBed } from '@angular/core/testing';

import { DatevalidationService } from './datevalidation.service';

describe('DatevalidationService', () => {
  let service: DatevalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatevalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
