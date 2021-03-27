import { NgModule } from '@angular/core';
import { RouterModule } from './common/index';
import { routes } from './app.routes';

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
