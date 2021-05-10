import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExerciseModComponent } from './new-exercise-mod.component';

describe('NewExerciseModComponent', () => {
  let component: NewExerciseModComponent;
  let fixture: ComponentFixture<NewExerciseModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExerciseModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExerciseModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
