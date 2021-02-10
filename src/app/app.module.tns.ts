import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsStoryViewComponent } from './news-story-view/news-story-view.component';


import { LoggerService } from './services/logger.service';
import { CommonService } from './services/common.service';
import { SessionDataService } from './services/session-data.service';
import { NewsService } from './services/news.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsStoryViewComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule
  ],
  exports: [],
  providers: [
    LoggerService,
    CommonService,
    SessionDataService,
    NewsService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
