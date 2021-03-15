import { Component, OnInit } from '@angular/core';

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
               private d$: SessionDataService ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  ngOnInit(): void {
    this.tiles = [
      { type:"photo",title:"Academy",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
      { type:"photo",title:"Junior A Team",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
      { type:"photo",title:"Junior B Team",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
      { type:"photo",title:"Youths",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
    ];

    this.lg$.log("Created tiles array: " + this.tiles.length);
  }

  onItemTap( args ) {
    this.lg$.log("Clicked on: " + args);
  }

}
