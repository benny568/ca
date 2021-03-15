import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyRoutingModule } from '@src/app/academy/academy-routing.module';
import { AcademyOverviewComponent } from '@src/app/academy/academy-overview/academy-overview.component';
import { AcademyNewsComponent } from '@src/app/academy/academy-news/academy-news.component';
import { AcademyHomeComponent } from '@src/app/academy/academy-home/academy-home.component';
import { AcademyCoachesComponent } from '@src/app/academy/academy-coaches/academy-coaches.component';
import { AcademyScheduleComponent } from '@src/app/academy/academy-schedule/academy-schedule.component';
import { AcademyRegistrationComponent } from '@src/app/academy/academy-registration/academy-registration.component';


@NgModule({
  declarations: [AcademyOverviewComponent, AcademyNewsComponent, AcademyHomeComponent, AcademyCoachesComponent, AcademyScheduleComponent, AcademyRegistrationComponent],
  imports: [
    CommonModule,
    AcademyRoutingModule
  ]
})
export class AcademyModule { }
