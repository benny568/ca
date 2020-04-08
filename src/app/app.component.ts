import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";

import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { AuthService } from '@src/app/services/auth.service';
import { UserService } from '@src/app/services/user.service';
import { CookieService } from '@src/app/services/cookie.service';
import { SessionDataService } from '@src/app/services/session-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent implements OnInit {
  componentName = 'AppComponent';
    logdepth      = 0;
    loggedIn      = '';
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    
    constructor( private lg$    : LoggerService,
                 private com$   : CommonService,
                 public  d$     : SessionDataService,
                 public auth$   : AuthService,
                 public  user$  : UserService,
                 public  cookie$: CookieService,
                 private router : Router,
                 private _http  : HttpClient,
                 private routerExtensions: RouterExtensions ) 
        {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    
        // Load the teams to use in the menu system
        this.d$.dsGetTeams();
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    goToTeamView(team) {
      this.lg$.log('-> goToTeamView(' + team + ')');
      this.d$.loadTeamDetailsByNameByObservable(team, this.logdepth)
              .subscribe( data => this.getTeamMembers( data ),
                          error => this.lg$.log('ERROR: Reading team details from server, team: ' + team),
                          ()    => this.lg$.log('<-- Team details read successfully for team: ' + team)
                      );
      }
  
      getTeamMembers( data )
      {
          this.lg$.log("-> getTeamMembers()");
          this.d$.dsCurrentTeam = data;
          this.lg$.log("  |-- Data returned, id: " + this.d$.dsCurrentTeam.id);
          this.lg$.log("  |-- Data returned, team name: " + this.d$.dsCurrentTeam.name);
          this.lg$.log("  |-- Data returned, lrcode: " + this.d$.dsCurrentTeam.lrcode);
          this.lg$.log("  |-- Data returned, lrFixturesCode: " + this.d$.dsCurrentTeam.lrFixturesCode);
          this.lg$.log("  |-- Data returned, lrResultsCode: " + this.d$.dsCurrentTeam.lrResultsCode);
          this.lg$.log("  |-- Data returned, noticeboard: " + this.d$.dsCurrentTeam.noticeboard);
          this.d$.loadTeamMembersByIdByObservable(this.d$.dsCurrentTeam.id)
              .subscribe( data => this.changeToTeamPage( data ),
                          error => this.lg$.log("ERROR: Reading team members from server, team: " + this.d$.dsCurrentTeam.name),
                          ()    => this.lg$.log("<-- Team members read successfully for team: " + this.d$.dsCurrentTeam.name)
                      );
      }
  
      changeToTeamPage( data )
      {
          this.lg$.log("-> changeToTeamPage()");
          this.d$.dsTeamMembers = data;
  
          for ( var i = 0; i < this.d$.dsTeamMembers.length; i++ )
          {
              this.lg$.log("  |-- Members returned, " + i + ": " + this.d$.dsTeamMembers[i].name);
          }
  
  
          this.router.navigate(['/viewTeam']);
      }
  
  
      goToFarView(team)
      {
          this.lg$.log("-> goToFarView(" + team + ")");
          this.d$.loadTeamDetailsByNameByObservable(team, this.logdepth)
              .subscribe( data => this.changeToFarPage( data ),
                          error => this.lg$.log("ERROR: Reading team details from server, team: " + team),
                          ()    => this.lg$.log("<-- Team details read successfully for team: " + team)
                      );
      }
  
      changeToFarPage( data )
      {
          this.lg$.log("-> changeToFarPage()");
  
          this.d$.dsCurrentTeam = data;
          this.lg$.log("  |-- Data returned, id: " + this.d$.dsCurrentTeam.id);
          this.lg$.log("  |-- Data returned, team name: " + this.d$.dsCurrentTeam.name);
          this.lg$.log("  |-- Data returned, lrcode: " + this.d$.dsCurrentTeam.lrcode);
          this.lg$.log("  |-- Data returned, lrFixturesCode: " + this.d$.dsCurrentTeam.lrFixturesCode);
          this.lg$.log("  |-- Data returned, lrResultsCode: " + this.d$.dsCurrentTeam.lrResultsCode);
          this.lg$.log("  |-- Data returned, noticeboard: " + this.d$.dsCurrentTeam.noticeboard);
          this.router.navigate(['/farView']);
      }
  
  logout()
  {
      this.auth$.logout();
      localStorage.setItem('AdminHasLoggedIn', 'false');
      localStorage.removeItem('id_token');
      this.d$.dsAuthenticated = false;
      this.lg$.log('User login status: ' + this.d$.dsAuthenticated );
          this.lg$.log("USER LOGGED OUT!!");
      window.location.href = "/";
          //this.router.navigate( ['home', {}] );
  }
  
  private saveVisitorCookie()
  {
      let expires = new Date(Date.now() + 86400);
  
      document.cookie = "visitor=1;expires=" + expires + ";path=/;";
      this.lg$.log("-> saveVisitorCookie() : Cookies: " + document.cookie );
  }
  
  getVisitorCookie(): string
  {
      let visitor = document.cookie;
      this.lg$.log("-> getVisitorCookie() : Retrieved visitor cookie: " + visitor);
      return visitor;
  }
  
  updateVisitorCount(): void
  {
      this.lg$.log("-> updateVisitorCount()");
  
      this.d$.incrementVisitorCount();
  
      this.lg$.log("<- updateVisitorCount");
  }
}
