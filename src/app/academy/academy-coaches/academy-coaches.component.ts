import { Component, OnInit } from '@angular/core';

import { Officer } from '@src/app/model/officer';
import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';

@Component({
  selector   : 'app-academy-coaches',
  templateUrl: './academy-coaches.component.html',
  styleUrls  : ['./academy-coaches.component.css'],
  providers  : [ LoggerService ]
})
export class AcademyCoachesComponent implements OnInit {
  componentName = 'AcademyCoachesComponent';
  logdepth      = 2;
  currentSeason: String;
  officers: Officer[];

  constructor(  private lg$: LoggerService,
                private com$: CommonService ) { }

  ngOnInit() {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
    this.currentSeason = this.com$.calculateCurrentSeason();
    this.lg$.log(this.currentSeason);

    this.fillOficers();
  }

  fillOficers()
  {
    this.officers = new Array<Officer>();
    this.officers.push({"id":0, "office": "4-5 years", "name": "Geroid Manion", "phone": "2015", "email": "gmanion@gmail.com"});
    this.officers.push({"id":0, "office": "6 years", "name": "Tom Moran", "phone": "2014", "email": "morant@gmail.com"});
    this.officers.push({"id":0, "office": "7 years", "name": "Jim Beglin", "phone": "2013", "email": "jb2099@gmail.com"});
    this.officers.push({"id":0, "office": "8 years", "name": "Larry Clune", "phone": "2012", "email": "gmanion@gmail.com"});
    this.officers.push({"id":0, "office": "9 years", "name": "Larry Clune", "phone": "2011", "email": "gmanion@gmail.com"});
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

