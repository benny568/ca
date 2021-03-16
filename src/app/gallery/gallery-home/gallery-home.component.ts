import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService } from '@src/app/services/logger.service';
import { SessionDataService } from '@src/app/services/session-data.service';

import { Media } from '@src/app/model/media';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css'],
  providers: [ LoggerService ]
})
export class GalleryHomeComponent implements OnInit {
  componentName: string = 'GalleryHomeComponent';
  logdepth     : number = 2;
  tiles        : Media[];

  constructor( private lg$: LoggerService,
               private d$: SessionDataService,
               public router: Router ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  ngOnInit(): void {
    this.tiles = [
      { type:"photo",title:"Academy",description:"",image:"~/assets/img/tiles/academy.png",thumb:""},
      { type:"photo",title:"Junior-A",description:"",image:"~/assets/img/tiles/a-team.jpg",thumb:""},
      { type:"photo",title:"Junior-B",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
      { type:"photo",title:"Youths",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
    ];
  }

  onItemTap( args ) {
    this.lg$.log("Clicked on: " + args.index);

    switch(args.index) { 
      case 0: {
        this.lg$.log("Routing to Academy Gallery");
        this.router.navigate(["gallery/academy"]); 
        break; 
      } 
      case 1: {
        this.lg$.log("Routing to Junior A Gallery");
        this.router.navigate(["gallery/juniora"]);  
        break; 
      }
      case 2: {
        this.lg$.log("Routing to Junior B Gallery");
        this.router.navigate(["gallery/juniorb"]);  
        break; 
      }
      case 3: {
        this.lg$.log("Routing to Youths Gallery");
        this.router.navigate(["gallery/youths"]);  
        break; 
      }
      default: { 
         //statements; 
         break; 
      } 
   }
  }

}
