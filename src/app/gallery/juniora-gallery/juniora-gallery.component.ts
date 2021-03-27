  import { Component, OnInit } from '@angular/core';
  import { Router } from '@src/app/common/index';
  
  import { LoggerService } from '@src/app/services/logger.service';
  import { SessionDataService } from '@src/app/services/session-data.service';
  
  import { Media } from '@src/app/model/media';
  
  @Component({
    selector: 'app-juniora-gallery',
    templateUrl: './juniora-gallery.component.html',
    styleUrls: ['./juniora-gallery.component.css']
  })
  export class JunioraGalleryComponent implements OnInit {
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
        { type:"photo",title:"2004",description:"",image:"~/assets/img/tiles/academy.png",thumb:""},
        { type:"photo",title:"2018",description:"",image:"~/assets/img/tiles/a-team.jpg",thumb:""},
        { type:"photo",title:"2019",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
      ];
    }
  
    onItemTap( args ) {
      this.lg$.log("Clicked on: " + args.index);
  
      switch(args.index) { 
        case 0: {
          this.lg$.log("Routing to Junior A 2004");
          this.router.navigate(["gallery/display/2008/JuniorA"]); 
          break; 
        } 
        case 1: {
          this.lg$.log("Routing to Junior A 2018");
          this.router.navigate(["gallery/display/2018/JuniorA"]);  
          break; 
        }
        case 2: {
          this.lg$.log("Routing to Junior A 2019");
          this.router.navigate(["gallery/display/2019/JuniorA"]);  
          break; 
        }
        default: { 
           //statements; 
           break; 
        } 
     }
    }
  
  }
  
