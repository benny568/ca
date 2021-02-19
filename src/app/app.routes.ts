import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { NewsStoryViewComponent } from '@src/app/news-story-view/news-story-view.component';
import { InformationModule } from '@src/app/information/information.module';
import { AcademyModule } from '@src/app/academy/academy.module';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/story', component: NewsStoryViewComponent },
  { path: "information", loadChildren: () => import("./information/information.module").then(m => m.InformationModule) },
  { path: "academy", loadChildren: () => import("@src/app/academy/academy.module").then(m => m.AcademyModule) }
];