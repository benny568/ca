import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { AcademyNewsComponent } from '@src/app/academy/academy-news/academy-news.component';

const routes: Routes = [
  { path: "", component: AcademyNewsComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademyRoutingModule { }
