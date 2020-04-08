import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InformationComponent } from "@src/app/information/information.component";
import { ClubHistoryComponent } from "@src/app/information/clubhistory/clubhistory.component";

const routes: Routes = [
    { path: "", component: InformationComponent },
    { path: "clubhistory", component: ClubHistoryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InformationRoutingModule { }