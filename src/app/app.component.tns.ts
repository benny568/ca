import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { RouterExtensions as Router } from '@nativescript/angular';
import * as app from '@nativescript/core/application';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { LoggerService } from './services/logger.service';
import { SessionDataService } from './services/session-data.service';

import { Team } from './model/team';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css'],
  moduleId   : module.id
})

export class AppComponent implements OnInit {
  private _sideDrawerTransition: DrawerTransitionBase;
  private componentName: string = "AppComponent(M)";
  private logdepth: number = 1;
  public show: boolean = false;
  public showAcademyMenu: boolean = false;
  public showGalleryMenu: boolean = false;
  public showAcademy2007menu: boolean = false;
  public showAcademyGalleryMenu: boolean = false;
  public showAcademy09menu: boolean = false;
  public showAcademy16menu: boolean = false;
  public showAcademy17menu: boolean = false;
  public showAcademy18menu: boolean = false;
  public showJAGalleryMenu: boolean = false;
  public showJBGalleryMenu: boolean = false;
  public showJB16menu: boolean = false;
  public showJB18menu: boolean = false;
  public showSBGalleryMenu: boolean = false;
  public showSB09Menu: boolean = false;
  public showSBU11Menu: boolean = false;
  public showSB10Menu: boolean = false;
  public showSB15Menu: boolean = false;
  public showSB16Menu: boolean = false;
  public showSB18Menu: boolean = false;
  public teams: Team[];
  faCoffee = faCoffee;

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
    this.show = this.showAcademyMenu = this.showGalleryMenu = this.showAcademyGalleryMenu = false;
    this.showAcademy2007menu = this.showAcademy09menu = false;
    this.showAcademy16menu = false;
    this.showAcademy17menu = false;
    this.showAcademy18menu = false;
    this.showJAGalleryMenu = false;
    this.showJBGalleryMenu = false;
    this.showJB16menu = false;
    this.showJB18menu = false;
    this.showSBU11Menu = false;
    this.showSBGalleryMenu = false;
    this.showSB09Menu = false;
    this.showSB10Menu = false;
    this.showSB15Menu = false;
    this.showSB16Menu = false;
    this.showSB18Menu = false;
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