import { Component } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';
import { SessionDataService } from '@src/app/services/session-data.service';

@Component({
  selector   : 'app-home',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.component.css'],
  providers  : [ LoggerService ]
})

export class HomeComponent {
  private componentName    : string  = 'HomeComponent';
  private logdepth         : number  = 3;

  constructor(  private lg$: LoggerService,
                public  d$ : SessionDataService )
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  onDrawerButtonTap(): void {
  }

}
