import { Component } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';

@Component({
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css' ]
})

export class FindUsComponent {
  componentName = 'FindUsComponent';
  logdepth      = 2;
  findUsTitle: string = "How To Find Us";
  findUsText: string = "Take exit 13 off the M18 motorway (Limerick - Galway) for Ennis town. Take a left at the exit roundabout for Ennis town. At the next roundabout take a right. Take the first right 100m after the roundabout. Turn left into the Avenue United grounds.";

  constructor( private lg$: LoggerService ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }
}