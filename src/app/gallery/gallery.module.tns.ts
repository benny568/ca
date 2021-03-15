import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GalleryRoutingModule } from '@src/app/gallery/gallery-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { GalleryHomeComponent } from '@src/app/gallery/gallery-home/gallery-home.component';


@NgModule({
  declarations: [GalleryHomeComponent],
  imports: [
    GalleryRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GalleryModule { }
