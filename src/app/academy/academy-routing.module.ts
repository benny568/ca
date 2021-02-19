import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademyNewsComponent } from '@src/app/academy/academy-news/academy-news.component';

const routes: Routes = [
  { path: "", component: AcademyNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademyRoutingModule { }
