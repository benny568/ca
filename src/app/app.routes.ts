import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { NewsStoryViewComponent } from '@src/app/news-story-view/news-story-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/story', component: NewsStoryViewComponent },
  { path: "gallery", loadChildren: () => import("./gallery/gallery.module").then(m => m.GalleryModule) },
  { path: "information", loadChildren: () => import("./information/information.module").then(m => m.InformationModule) },
  { path: "academy", loadChildren: () => import("@src/app/academy/academy.module").then(m => m.AcademyModule) },
  { path: "teams", loadChildren: () => import("@src/app/teams/teams.module").then(m => m.TeamsModule) }
];