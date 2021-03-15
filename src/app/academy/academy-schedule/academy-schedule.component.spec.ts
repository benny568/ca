import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyScheduleComponent } from '@src/app/academy/academy-schedule/academy-schedule.component';

describe('AcademyScheduleComponent', () => {
  let component: AcademyScheduleComponent;
  let fixture: ComponentFixture<AcademyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
