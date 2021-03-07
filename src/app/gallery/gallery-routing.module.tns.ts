import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { AcademyGalleryComponent } from './academy-gallery/academy-gallery.component';

const routes: Routes = [
  { path: "", component: GalleryHomeComponent },
  { path: 'academyGallery', component: AcademyGalleryComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GalleryRoutingModule { }
