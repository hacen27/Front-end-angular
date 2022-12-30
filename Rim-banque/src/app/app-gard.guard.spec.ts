import { TestBed } from '@angular/core/testing';

import { AppGardGuard } from './app-gard.guard';

describe('AppGardGuard', () => {
  let guard: AppGardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppGardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
