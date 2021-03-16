import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunioraGalleryComponent } from '@src/app/gallery/juniora-gallery/juniora-gallery.component';

describe('JunioraGalleryComponent', () => {
  let component: JunioraGalleryComponent;
  let fixture: ComponentFixture<JunioraGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunioraGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunioraGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
