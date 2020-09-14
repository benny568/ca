import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { InformationComponent } from "@src/app/information/information.component";
import { ClubHistoryComponent } from "@src/app/information/clubhistory/clubhistory.component";
import { LinksComponent } from "@src/app/information/links/links.component";
import { DownloadsComponent } from "./downloads/downloads.component";
import { FindUsComponent } from "./find-us/find-us.component";
import { MessageUsComponent } from "./message-us/message-us.component";

const routes: Routes = [
    { path: "", component: InformationComponent },
    { path: "clubhistory", component: ClubHistoryComponent },
    { path: "links", component: LinksComponent },
    { path: "downloads", component: DownloadsComponent },
    { path: "find-us", component: FindUsComponent },
    { path: "message-us", component: MessageUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class InformationRoutingModule { }