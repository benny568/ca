import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarViewComponent } from '@src/app/teams/far-view/far-view.component';

describe('FarViewComponent', () => {
  let component: FarViewComponent;
  let fixture: ComponentFixture<FarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
