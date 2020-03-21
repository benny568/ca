import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { NewsStoryViewComponent } from '@src/app/news-story-view/news-story-view.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  { path: 'home/story', component: NewsStoryViewComponent }
];
