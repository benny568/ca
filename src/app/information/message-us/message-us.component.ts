import { Component, OnInit } from '@angular/core';
import { Button, EventData } from '@nativescript/core';
import { Router } from '../../common';

import * as email from "nativescript-email";

import { LoggerService } from '@src/app/services/logger.service';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.component.html',
  styleUrls: ['./message-us.component.css']
})
export class MessageUsComponent implements OnInit {
  componentName = 'MessageUsComponent';
  logdepth      = 3;
  // public recipient: string = 'secretary@avenueunited.ie';
  recipient: string = 'odalybr@hotmail.com';
  sender: string ;
  subject: string;
  message: string;
  composeOptions: email.ComposeOptions;
  
  constructor(  private lg$    : LoggerService,
                private router$: Router ) {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  ngOnInit() { }

  public sendEmail()
  {
    this.lg$.log("-> sendEmaiil()");

    this.lg$.log("    email address: " + this.sender);
    this.lg$.log("    Subject: " + this.subject);
    this.lg$.log("    Message: " + this.message);
    this.lg$.log("    sending email message to " + this.recipient);

    email.available().then(available => {
      this.lg$.log("        The device email status is $(available)");

      if( available )
      {
        this.composeOptions = {
          to: [this.recipient],
          subject: this.subject,
          body: this.message,
          cc: [this.sender]
        }
        email.compose(this.composeOptions).then(result => {
          this.lg$.log(result);
          if( result ) {
            this.lg$.log("Email sent successfully.");
          }
          else {
            this.lg$.error("Email not sent!");
          }
        }).catch(error => this.lg$.error(error));
      }
    }).catch(error => this.lg$.error(error));

    this.lg$.log("    Navigating to home");
    this.lg$.log("<- sendEmaiil()");

    this.router$.navigateByUrl("home");
  }

  onButtonTap(args: EventData) {
    const button = <Button>args.object;
    console.log('Button tapped');
    this.lg$.log("    email address: " + this.sender);
  }

}