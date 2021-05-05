import { TestBed } from '@angular/core/testing';

import { ExercisesAdminService } from './exercises-admin.service';

describe('ExercisesAdminService', () => {
  let service: ExercisesAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisesAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
