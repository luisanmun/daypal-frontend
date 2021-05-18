import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchWeightUserComponent } from './patch-weight-user.component';

describe('PatchWeightUserComponent', () => {
  let component: PatchWeightUserComponent;
  let fixture: ComponentFixture<PatchWeightUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchWeightUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchWeightUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
