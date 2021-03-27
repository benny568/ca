import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptCommonModule as CommonModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';

import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { NewsComponent } from '@src/app/news/news.component';
import { NewsStoryViewComponent } from '@src/app/news-story-view/news-story-view.component';
import { MerchandiseComponent } from '@src/app/merchandise/merchandise.component';
import { PhotosComponent } from '@src/app/photos/photos.component';


import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { SessionDataService } from '@src/app/services/session-data.service';
import { NewsService } from '@src/app/services/news.service';
import { CookieService } from '@src/app/services/cookie.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsStoryViewComponent,
    MerchandiseComponent,
    PhotosComponent
  ],
  imports: [
    NativeScriptModule,
    CommonModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule
  ],
  exports: [],
  providers: [
    LoggerService,
    CommonService,
    SessionDataService,
    NewsService,
    CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
