import { Component } from '@angular/core';

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
                 public auth$   : AuthService,
                 public  user$  : UserService ) {}
}
