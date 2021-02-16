import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { InformationRoutingModule } from "./information-routing.module";
import { InformationComponent } from "./information.component";
import { ClubHistoryComponent } from "./clubhistory/clubhistory.component";
import { LinksComponent } from "./links/links.component";
import { DownloadsComponent } from "./downloads/downloads.component";
import { FindUsComponent } from "./find-us/find-us.component";
import { MessageUsComponent } from "./message-us/message-us.component";

@NgModule({
    imports: [
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