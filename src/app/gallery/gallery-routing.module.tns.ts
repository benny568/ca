import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { AcademyGalleryComponent } from './academy-gallery/academy-gallery.component';
import { JunioraGalleryComponent } from './juniora-gallery/juniora-gallery.component';
import { JuniorbGalleryComponent } from './juniorb-gallery/juniorb-gallery.component';
import { YouthsGalleryComponent } from './youths-gallery/youths-gallery.component';

const routes: Routes = [
  { path: "", component: GalleryHomeComponent },
  { path: 'academy', component: AcademyGalleryComponent },
  { path: 'juniora', component: JunioraGalleryComponent },
  { path: 'juniorb', component: JuniorbGalleryComponent },
  { path: 'youths', component: YouthsGalleryComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GalleryRoutingModule { }
