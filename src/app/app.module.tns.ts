import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AuthService } from '@src/app/services/auth.service';
import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { SessionDataService } from '@src/app/services/session-data.service';
import { UserService } from '@src/app/services/user.service';
import { ErrorService } from '@src/app/services/error.service';
import { CookieService } from '@src/app/services/cookie.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule

  ],
  providers: [
    AuthService,
    LoggerService,
    CommonService,
    SessionDataService,
    UserService,
    ErrorService,
    CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
