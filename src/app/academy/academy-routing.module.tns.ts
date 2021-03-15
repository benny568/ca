import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { AcademyHomeComponent } from './academy-home/academy-home.component';
import { AcademyOverviewComponent } from './academy-overview/academy-overview.component';
import { AcademyNewsComponent } from './academy-news/academy-news.component';

const routes: Routes = [
  { path: "", component: AcademyHomeComponent },
  { path: "overview", component: AcademyOverviewComponent },
  { path: "news", component: AcademyNewsComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademyRoutingModule { }
