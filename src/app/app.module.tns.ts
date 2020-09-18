import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from '@nativescript/angular';

import { MaterialModule } from '@src/app/material.module';

import { SHARED_MODULES } from './app.common';
import { RouterModule } from '@src/app/common/router-module';
import { routes } from '@src/app/app.routes';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { NewsComponent } from '@src/app/news/news.component';
import { NewsStoryViewComponent } from '@src/app/news-story-view/news-story-view.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript/angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper


// import { AuthService } from '@src/app/services/auth.service';
// import { LoggerService } from '@src/app/services/logger.service';
// import { CommonService } from '@src/app/services/common.service';
// import { SessionDataService } from '@src/app/services/session-data.service';
// import { UserService } from '@src/app/services/user.service';
// import { ErrorService } from '@src/app/services/error.service';
// import { CookieService } from '@src/app/services/cookie.service';
import { NewsService } from '@src/app/services/news.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsStoryViewComponent
  ],
  imports: [
    // ...SHARED_MODULES,
    RouterModule,
    RouterModule.forRoot(routes),
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    MaterialModule
  ],
  providers: [
    // AuthService,
    // LoggerService,
    // CommonService,
    // SessionDataService,
    // UserService,
    // ErrorService,
    // CookieService,
    NewsService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
