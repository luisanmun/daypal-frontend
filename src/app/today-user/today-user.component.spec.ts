import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayUserComponent } from './today-user.component';

describe('TodayUserComponent', () => {
  let component: TodayUserComponent;
  let fixture: ComponentFixture<TodayUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
