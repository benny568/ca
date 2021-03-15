import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyOverviewComponent } from '@src/app/academy/academy-overview/academy-overview.component';

describe('AcademyOverviewComponent', () => {
  let component: AcademyOverviewComponent;
  let fixture: ComponentFixture<AcademyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
