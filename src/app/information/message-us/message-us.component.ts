import { Component, OnInit } from '@angular/core';
import { Button, EventData } from '@nativescript/core';
import { Router } from '../../common';

import { LoggerService } from '@src/app/services/logger.service';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.component.html',
  styleUrls: ['./message-us.component.css']
})
export class MessageUsComponent implements OnInit {
  componentName = 'MessageUsComponent';
  logdepth      = 3;
  public recipient: string = 'secretary@avenueunited.ie';
  email: string ;
  subject: string;
  message: string;
  
  constructor(  private lg$    : LoggerService,
                private router$: Router ) {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  ngOnInit() { }

  public sendEmail()
  {
    this.lg$.log("-> sendEmaiil()");

    this.lg$.log("    email address: " + this.email);
    this.lg$.log("    Subject: " + this.subject);
    this.lg$.log("    Message: " + this.message);

    this.lg$.log("    Navigating to home");
    this.lg$.log("<- sendEmaiil()");

    this.router$.navigateByUrl("home");
  }

  onButtonTap(args: EventData) {
    const button = <Button>args.object;
    console.log('Button tapped');
    this.lg$.log("    email address: " + this.email);
  }

}