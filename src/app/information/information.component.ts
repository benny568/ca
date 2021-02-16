import { Component } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';

@Component({
    selector: 'information',
    templateUrl: './information.component.html',
    styleUrls: [ './information.component.css' ],
    providers  : [ LoggerService ]
})

export class InformationComponent {
    componentName = 'InformationComponent';
    logdepth      = 2;

    constructor( private lg$: LoggerService,
                 private common$: CommonService ) {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    }

}