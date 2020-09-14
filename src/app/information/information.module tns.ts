import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript/angular/common";

import { InformationRoutingModule } from "@src/app/information/information-routing.module";
import { InformationComponent } from "@src/app/information/information.component";
import { ClubHistoryComponent } from "@src/app/information/clubhistory/clubhistory.component";
import { LinksComponent } from "./links/links.component";
import { DownloadsComponent } from "./downloads/downloads.component";
import { FindUsComponent } from "./find-us/find-us.component";
import { MessageUsComponent } from "./message-us/message-us.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InformationRoutingModule
    ],
    declarations: [
        InformationComponent,
        ClubHistoryComponent,
        LinksComponent,
        DownloadsComponent,
        FindUsComponent,
        MessageUsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InformationModule { }