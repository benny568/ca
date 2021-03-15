import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyCoachesComponent } from '@src/app/academy/academy-coaches/academy-coaches.component';

describe('AcademyCoachesComponent', () => {
  let component: AcademyCoachesComponent;
  let fixture: ComponentFixture<AcademyCoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyCoachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
