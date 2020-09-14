import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { RouterModule } from '../common';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AuthService } from '@src/app/services/auth.service';
import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { SessionDataService } from '@src/app/services/session-data.service';
import { UserService } from '@src/app/services/user.service';
import { ErrorService } from '@src/app/services/error.service';
import { CookieService } from '@src/app/services/cookie.service';

@NgModule({
  declarations: [],
  exports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    RouterModule,
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
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }