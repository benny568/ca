import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { JunioraGalleryComponent } from './juniora-gallery/juniora-gallery.component';
import { JuniorbGalleryComponent } from './juniorb-gallery/juniorb-gallery.component';
import { YouthsGalleryComponent } from './youths-gallery/youths-gallery.component';


@NgModule({
  declarations: [
    GalleryHomeComponent,
    JunioraGalleryComponent, 
    JuniorbGalleryComponent, 
    YouthsGalleryComponent
  ],
  imports: [
    GalleryRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GalleryModule { }
