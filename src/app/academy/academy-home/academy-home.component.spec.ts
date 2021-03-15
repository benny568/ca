import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyHomeComponent } from '@src/app/academy/academy-home/academy-home.component';

describe('AcademyHomeComponent', () => {
  let component: AcademyHomeComponent;
  let fixture: ComponentFixture<AcademyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
