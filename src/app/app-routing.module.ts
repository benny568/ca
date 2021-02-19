import { NgModule } from '@angular/core';
import { RouterModule } from '@src/app/common/index';
import { routes } from '@src/app/app.routes';

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
