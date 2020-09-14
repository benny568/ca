import { Component, OnInit } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // moduleId: module.id
})

export class HomeComponent implements OnInit {
  componentName = 'HomeComponent';
  logdepth      = 1;
  loggedIn      = '';

  constructor( private lg$    : LoggerService ) {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
   }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
  }
}
