import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorbGalleryComponent } from '@src/app/gallery/juniorb-gallery/juniorb-gallery.component';

describe('JuniorbGalleryComponent', () => {
  let component: JuniorbGalleryComponent;
  let fixture: ComponentFixture<JuniorbGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuniorbGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorbGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
