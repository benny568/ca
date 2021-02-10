import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from './common';

// import { MaterialModule } from './material.module';
// import { CovalentModule } from './covalent.module';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { NavComponent } from './nav/nav.component';
// import { NewsComponent } from './news/news.component';
// import { NewsStoryViewComponent } from './news-story-view/news-story-view.component';
import { MaterialModule } from './material.module';
import { CovalentModule } from './covalent.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NewsComponent } from './news/news.component';
import { NewsStoryViewComponent } from './news-story-view/news-story-view.component';


import { AuthService } from './services/auth.service';
import { LoggerService } from './services/logger.service';
import { CommonService } from './services/common.service';
import { SessionDataService } from './services/session-data.service';
import { UserService } from './services/user.service';
import { ErrorService } from './services/error.service';
import { CookieService } from './services/cookie.service';
import { NewsService } from './services/news.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewsComponent,
    NewsStoryViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    CovalentModule
  ],
  providers: [
    AuthService,
    LoggerService,
    CommonService,
    SessionDataService,
    UserService,
    ErrorService,
    CookieService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

