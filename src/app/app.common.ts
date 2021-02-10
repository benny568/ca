import { RouterModule } from './common';

import { routes } from './app.routes';

import { SharedModule } from './shared';


export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forRoot(routes)
];

export const SHARED_COMPONENTS: any[] = [

];