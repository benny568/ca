import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Router } from '../common';
import { RouterExtensions } from '@nativescript/angular';

import { LoggerService } from '../services/logger.service';
import { SessionDataService } from '../services/session-data.service';

import { Media } from '../model/media';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ LoggerService ]
})
export class GalleryComponent implements OnInit {
  componentName: string = 'GalleryComponent';
  logdepth     : number = 2;
  tiles        : Media[];

  constructor( private lg$: LoggerService,
               private d$: SessionDataService,
               private routerExtensions: RouterExtensions,
               private activeRoute: ActivatedRoute ) 
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

    this.lg$.log("Created tiles array: " + this.tiles.length);
  }

  onItemTap( args ) {
    // this.lg$.log("[Mobile] Item was clicked in position: " + args.index );
    // this.lg$.log("[Mobile] User chose: " + this.tiles[args.index].title);

    // let path = "/" + this.tiles[args.index].title;

    // this.routerExtensions.navigate(["/academyGallery"]);
    this.routerExtensions.navigate(['/test'], 
    { relativeTo: this.activeRoute }
    );
  }

  goToAcademyGallery()
  {}

}
