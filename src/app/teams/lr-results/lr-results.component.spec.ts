import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrResultsComponent } from '@src/app/teams/lr-results/lr-results.component';

describe('LrResultsComponent', () => {
  let component: LrResultsComponent;
  let fixture: ComponentFixture<LrResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
