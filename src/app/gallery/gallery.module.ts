import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { GalleryRoutingModule } from '@src/app/gallery/gallery-routing.module';
import { GalleryHomeComponent } from '@src/app/gallery/gallery-home/gallery-home.component';

import { LoggerService }        from '@src/app/services/logger.service';
import { JunioraGalleryComponent } from '@src/app/gallery/juniora-gallery/juniora-gallery.component';
import { JuniorbGalleryComponent } from '@src/app/gallery/juniorb-gallery/juniorb-gallery.component';
import { YouthsGalleryComponent } from '@src/app/gallery/youths-gallery/youths-gallery.component';


@NgModule({
  declarations: [
    GalleryHomeComponent, 
    JunioraGalleryComponent, 
    JuniorbGalleryComponent, 
    YouthsGalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GalleryRoutingModule
  ],
  providers: [ 
    LoggerService
  ]
})
export class GalleryModule { }
