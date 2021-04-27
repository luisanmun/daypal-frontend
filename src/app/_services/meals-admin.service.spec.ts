import { TestBed } from '@angular/core/testing';

import { MealsAdminService } from './meals-admin.service';

describe('MealsAdminService', () => {
  let service: MealsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
