import { NgModule } from '@angular/core';
import { CommonModule } from '@src/app/common-module/index';

import { AcademyRoutingModule } from '@src/app/academy/academy-routing.module';
import { AcademyNewsComponent } from '@src/app/academy/academy-news/academy-news.component';


@NgModule({
  declarations: [AcademyNewsComponent],
  imports: [
    CommonModule,
    AcademyRoutingModule
  ]
})
export class AcademyModule { }
