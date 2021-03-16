import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GalleryRoutingModule } from '@src/app/gallery/gallery-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { GalleryHomeComponent } from '@src/app/gallery/gallery-home/gallery-home.component';
import { JunioraGalleryComponent } from '@src/app/gallery/juniora-gallery/juniora-gallery.component';
import { JuniorbGalleryComponent } from '@src/app/gallery/juniorb-gallery/juniorb-gallery.component';
import { YouthsGalleryComponent } from '@src/app/gallery/youths-gallery/youths-gallery.component';


@NgModule({
  declarations: [GalleryHomeComponent, JunioraGalleryComponent, JuniorbGalleryComponent, YouthsGalleryComponent],
  imports: [
    GalleryRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GalleryModule { }
