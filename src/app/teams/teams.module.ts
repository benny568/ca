import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from '@src/app/teams/teams-routing.module';
import { ViewTeamComponent } from '@src/app/teams/view-team/view-team.component';
import { FarViewComponent } from '@src/app/teams/far-view/far-view.component';


@NgModule({
  declarations: [
    ViewTeamComponent,
    FarViewComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
