import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { AcademyGalleryComponent } from './academy-gallery/academy-gallery.component';

const routes: Routes = [
  { path: "", component: GalleryHomeComponent },
  { path: 'academyGallery', component: AcademyGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
