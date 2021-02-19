import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AcademyRoutingModule } from '@src/app/academy/academy-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AcademyNewsComponent } from '@src/app/academy/academy-news/academy-news.component';


@NgModule({
  declarations: [AcademyNewsComponent],
  imports: [
    AcademyRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AcademyModule { }
