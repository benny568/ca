import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from '@src/app/gallery/gallery-routing.module';
import { GalleryHomeComponent } from '@src/app/gallery/gallery-home/gallery-home.component';


@NgModule({
  declarations: [GalleryHomeComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
