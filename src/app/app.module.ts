import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@src/app/material.module';
import { CovalentModule } from '@src/app/covalent.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { NavComponent } from '@src/app/nav/nav.component';
import { NewsComponent } from '@src/app/news/news.component';

import { AuthService } from '@src/app/services/auth.service';
import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { SessionDataService } from '@src/app/services/session-data.service';
import { UserService } from '@src/app/services/user.service';
import { ErrorService } from '@src/app/services/error.service';
import { CookieService } from '@src/app/services/cookie.service';
import { NewsService } from '@src/app/services/news.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
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

