import { TestBed } from '@angular/core/testing';

import { AddJobGuard } from './add-job.guard';

describe('AddJobGuard', () => {
  let guard: AddJobGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddJobGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
