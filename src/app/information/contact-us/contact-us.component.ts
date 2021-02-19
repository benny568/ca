import { Component, OnInit } from '@angular/core';

import { Officer } from '@src/app/model/officer';
import { LoggerService } from '@src/app/services/logger.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  componentName = 'ContactUsComponent';
  logdepth      = 2;

  officers: Officer[];
  
  constructor( private lg$: LoggerService ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
    // TODO: This needs to be queried from the server
    this.fillOficers();
  }

  ngOnInit(): void {
  }

  fillOficers()
  {
    this.officers = new Array<Officer>();
    this.officers.push({"id":0, "office": "Chairman", "name": "Geroid Manion", "phone": "087 5683991", "email": "gmanion@gmail.com"});
    this.officers.push({"id":0, "office": "Secretary", "name": "Tom Moran", "phone": "087 9837665", "email": "morant@gmail.com"});
    this.officers.push({"id":0, "office": "Treasurer", "name": "Jim Beglin", "phone": "086 9648184", "email": "jb2099@gmail.com"});
    this.officers.push({"id":0, "office": "President", "name": "Larry Clune", "phone": "085 6490653", "email": "gmanion@gmail.com"});

    // this.printOfficers();
  }

  printOfficers()
  {
    for( let i=0; i<this.officers.length; i++ )
    {
      this.lg$.log(this.officers[i].office);
      this.lg$.log(this.officers[i].name);
      this.lg$.log(this.officers[i].phone);
      this.lg$.log(this.officers[i].email);
    }
  }

}
