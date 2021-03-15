import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademyRoutingModule } from '@src/app/academy/academy-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AcademyOverviewComponent } from '@src/app/academy/academy-overview/academy-overview.component';
import { AcademyNewsComponent } from '@src/app/academy/academy-news/academy-news.component';
import { AcademyHomeComponent } from '@src/app/academy/academy-home/academy-home.component';
import { AcademyCoachesComponent } from '@src/app/academy/academy-coaches/academy-coaches.component';
import { AcademyScheduleComponent } from '@src/app/academy/academy-schedule/academy-schedule.component';
import { AcademyRegistrationComponent } from '@src/app/academy/academy-registration/academy-registration.component';


@NgModule({
  declarations: [AcademyOverviewComponent, AcademyNewsComponent, AcademyHomeComponent, AcademyCoachesComponent, AcademyScheduleComponent, AcademyRegistrationComponent],
  imports: [
    AcademyRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AcademyModule { }
