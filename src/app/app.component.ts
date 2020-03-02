import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoggerService } from '@src/app//services/logger.service';
import { CommonService } from '@src/app//services/common.service';
import { AuthService } from '@src/app//services/auth.service';
import { UserService } from '@src/app//services/user.service';
import { CookieService } from '@src/app//services/cookie.service';
import { SessionDataService } from '@src/app//services/session-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentName = 'AppComponent';
    logdepth      = 0;
    loggedIn      = '';
    
    constructor( private lg$    : LoggerService,
                 private com$   : CommonService,
                 public  d$     : SessionDataService,
                 public auth$   : AuthService,
                 public  user$  : UserService,
                 public  cookie$: CookieService,
                 private router : Router,
                 private _http  : HttpClient ) 
        {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    
        // Load the teams to use in the menu system
        this.d$.dsGetTeams();
    }
}
