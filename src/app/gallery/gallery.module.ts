import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GalleryRoutingModule } from '@src/app/gallery/gallery-routing.module';
import { GalleryHomeComponent } from '@src/app/gallery/gallery-home/gallery-home.component';

import { LoggerService }        from '../services/logger.service';


@NgModule({
  declarations: [GalleryHomeComponent],
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
