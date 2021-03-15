import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { AcademyHomeComponent } from './academy-home/academy-home.component';
import { AcademyOverviewComponent } from './academy-overview/academy-overview.component';
import { AcademyNewsComponent } from './academy-news/academy-news.component';
import { AcademyScheduleComponent } from './academy-schedule/academy-schedule.component';
import { AcademyCoachesComponent } from './academy-coaches/academy-coaches.component';
import { AcademyRegistrationComponent } from './academy-registration/academy-registration.component';

const routes: Routes = [
  { path: "", component: AcademyHomeComponent },
  { path: "overview", component: AcademyOverviewComponent },
  { path: "news", component: AcademyNewsComponent },
  { path: "coaches", component: AcademyCoachesComponent },
  { path: "schedule", component: AcademyScheduleComponent },
  { path: "registration", component: AcademyRegistrationComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademyRoutingModule { }
