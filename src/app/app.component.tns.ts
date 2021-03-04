import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { RouterExtensions as Router } from '@nativescript/angular';
import * as app from '@nativescript/core/application';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';

import { LoggerService } from './services/logger.service';
import { SessionDataService } from './services/session-data.service';

import { Team } from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  moduleId: module.id
})

export class AppComponent implements OnInit {
  private _sideDrawerTransition: DrawerTransitionBase;
  private componentName: string = "AppComponent(M)";
  private logdepth: number = 1;
  public show: boolean = false;
  public teams: Team[];

  constructor( private lg$: LoggerService,
                private d$: SessionDataService,
                private router: Router ) {
    this.lg$.setLogHdr(this.logdepth, this.componentName);

    this.teams = new Array<Team>();
    this.getTeams();
    this.printTeams();
    
    // Load the teams to use in the menu system
    this.d$.dsGetTeams();
  }

  ngOnInit(): void {
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
      return this._sideDrawerTransition;
  }

  closeDrawer() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }

  isComponentSelected( url: string ) {}

  onNavItemTap( path: string, team: string ) {
    console.log("Clicked on: " + path );
    this.show = false;
    this.d$.dsCurrentTeam.name = team;
    
    this.router.navigateByUrl(path);
    this.closeDrawer();
  }

  getTeams()
  {
    for( let i=0; i<8; i++ )
    {
      let team: Team = new Team();
      team.id = i;
      team.name = "U1" + i;
      this.teams.push(team);
    }
  }

  printTeams()
  {
    for( let i=0; i<8; i++ )
      this.lg$.log(this.teams[i].id + ": " + this.teams[i].name);
  }
}