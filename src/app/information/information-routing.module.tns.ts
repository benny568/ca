import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { NativeScriptRouterModule as RouterModule } from '@nativescript/angular';

import { InformationComponent } from "./information.component";
import { ClubHistoryComponent } from "./clubhistory/clubhistory.component";
import { LinksComponent } from "./links/links.component";
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformationRoutingModule { }