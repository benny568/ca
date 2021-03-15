import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyRegistrationComponent } from '@src/app/academy/academy-registration/academy-registration.component';

describe('AcademyRegistrationComponent', () => {
  let component: AcademyRegistrationComponent;
  let fixture: ComponentFixture<AcademyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
