import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { ViewTeamComponent } from './view-team/view-team.component';
import { FarViewComponent }  from './far-view/far-view.component';

const routes: Routes = [
  { path: "", component: ViewTeamComponent },
  { path: 'viewTeam', component: ViewTeamComponent },
  { path: 'farView', component: FarViewComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TeamsRoutingModule { }
