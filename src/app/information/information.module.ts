import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { CommonModule } from '@src/app/common-module/index';

import { InformationRoutingModule } from '@src/app/information/information-routing.module';
import { InformationComponent } from '@src/app/information/information.component';
import { ClubHistoryComponent } from '@src/app/information/clubhistory/clubhistory.component';
import { LinksComponent } from '@src/app/information/links/links.component';
import { DownloadsComponent } from '@src/app/information/downloads/downloads.component';
import { FindUsComponent } from '@src/app/information/find-us/find-us.component';
import { MessageUsComponent } from '@src/app/information/message-us/message-us.component';
import { ContactUsComponent } from '@src/app/information/contact-us/contact-us.component';

@NgModule({
    imports: [
        CommonModule,
        InformationRoutingModule
    ],
    declarations: [
        InformationComponent,
        ClubHistoryComponent,
        LinksComponent,
        DownloadsComponent,
        FindUsComponent,
        MessageUsComponent,
        ContactUsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InformationModule { }