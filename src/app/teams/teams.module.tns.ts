import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { TeamsRoutingModule } from '@src/app/teams/teams-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ViewTeamComponent } from '@src/app/teams/view-team/view-team.component';
import { FarViewComponent } from '@src/app/teams/far-view/far-view.component';


@NgModule({
  declarations: [
    ViewTeamComponent, 
    FarViewComponent
  ],
  imports: [
    TeamsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TeamsModule { }
