import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMealModComponent } from './new-meal-mod.component';

describe('NewMealModComponent', () => {
  let component: NewMealModComponent;
  let fixture: ComponentFixture<NewMealModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMealModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMealModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
