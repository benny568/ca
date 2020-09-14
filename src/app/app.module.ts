import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SHARED_MODULES } from './app.common';

import { MaterialModule } from '@src/app/material.module';
import { CovalentModule } from '@src/app/covalent.module';

import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { NavComponent } from '@src/app/nav/nav.component';
import { NewsComponent } from '@src/app/news/news.component';
import { NewsStoryViewComponent } from '@src/app/news-story-view/news-story-view.component';

import { NewsService } from '@src/app/services/news.service';



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
    ...SHARED_MODULES,
    HttpClientModule,
    MaterialModule,
    CovalentModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

