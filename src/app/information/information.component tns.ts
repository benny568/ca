import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from "@nativescript/angular/router";

import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';

@Component({
    moduleId: module.id,
    selector: 'information',
    templateUrl: './information.component.html',
    styleUrls: [ './information.component.css' ],
    providers  : [ LoggerService ]
})

export class InformationComponent {
    componentName = 'InformationComponent';
    logdepth      = 2;

    constructor( private lg$: LoggerService,
                 private common$: CommonService,
                 public router: Router,
                 private routerExtensions: RouterExtensions ) {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    }
}