import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '../common';

import { AuthService } from '@src/app/services/auth.service';
import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { SessionDataService } from '@src/app/services/session-data.service';
import { UserService } from '@src/app/services/user.service';
import { ErrorService } from '@src/app/services/error.service';
import { CookieService } from '@src/app/services/cookie.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    LoggerService,
    CommonService,
    SessionDataService,
    UserService,
    ErrorService,
    CookieService,
  ],
})
export class SharedModule { }