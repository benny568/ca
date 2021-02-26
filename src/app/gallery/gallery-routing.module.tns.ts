import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { GalleryHomeComponent } from './gallery-home/gallery-home.component';

const routes: Routes = [
  { path: "", component: GalleryHomeComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GalleryRoutingModule { }
