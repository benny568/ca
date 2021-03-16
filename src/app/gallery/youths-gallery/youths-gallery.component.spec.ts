import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthsGalleryComponent } from '@src/app/gallery/youths-gallery/youths-gallery.component';

describe('YouthsGalleryComponent', () => {
  let component: YouthsGalleryComponent;
  let fixture: ComponentFixture<YouthsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouthsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
