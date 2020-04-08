import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InformationRoutingModule } from "@src/app/information/information-routing.module";
import { InformationComponent } from "@src/app/information/information.component";
import { ClubHistoryComponent } from "@src/app/information/clubhistory/clubhistory.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InformationRoutingModule
    ],
    declarations: [
        InformationComponent,
        ClubHistoryComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InformationModule { }