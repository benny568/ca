import { Component, OnInit } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';
import { SessionDataService } from '@src/app/services/session-data.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  private componentName: string = "ViewTeamComponent";
  private logdepth: number = 3;

  constructor(  private lg$: LoggerService,
                public d$: SessionDataService ) {
    this.lg$.setLogHdr(this.logdepth, this.componentName);

  }

  ngOnInit(): void {
    this.lg$.log("The team in question is: " + this.d$.dsCurrentTeam.name );
    this.d$.setCurrentTeamByName(this.d$.dsCurrentTeam.name);
  }

}
