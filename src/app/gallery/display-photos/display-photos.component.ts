import { Component, OnInit } from '@angular/core';
import { Router,
          ActivatedRoute,
          Params          }    from '@angular/router';


import { Media } 			        from '../../model/media';
import { SessionDataService } from '../../services/session-data.service';
import { LoggerService }      from '../../services/logger.service';
import { CommonService }      from '../../services/common.service'

@Component({
  selector: 'app-display-photos',
  templateUrl: './display-photos.component.html',
  styleUrls: ['./display-photos.component.css'],
  providers: [LoggerService]
})
export class DisplayPhotosComponent implements OnInit {
    componentName : string = 'AcademyGalleryComponent';
    aAlbum          : Array<Media>;
    path            : string = '';
    logdepth        : number = 1;
    items           : []; //MenuItem[];
    paramsObservable: any;
    display         : boolean;
  
    constructor( private lg$: LoggerService, 
                 private d$: SessionDataService,
                 private com$: CommonService,
                 private route: ActivatedRoute 
                ) 
    {
      this.lg$.setLogHdr(this.logdepth, this.componentName);
  
      this.lg$.log("constructor()");
    }
  
    ngOnInit()
    {
      let cat1 = ''; //this.routeParams.get('cat1'); // team
      let cat2 = ''; //this.routeParams.get('cat2'); // year
      let cat3 = ''; //this.routeParams.get('cat3'); // event
      var url = '';
      this.aAlbum = new Array<Media>();
  
  
      this.items = [];
      // [{
          //     label: 'File',
          //     items: [
          //         {label: 'New', icon: 'fa-plus'},
          //         {label: 'Open', icon: 'fa-download'}
          //     ]
          // },
          // {
          //     label: 'Edit',
          //     items: [
          //         {label: 'Undo', icon: 'fa-refresh'},
          //         {label: 'Redo', icon: 'fa-repeat'}
          //     ]
          // }];
  
  
      this.route.params.forEach((params: Params) => {
        cat1 = params['cat1'];
        cat2 = params['cat2'];
        cat3 = params['cat3'];
      });
  
      this.lg$.log("-> OnInit(" + cat1 + "/" + cat2 + "/" + cat3 + "," + ")");
  
      if ( cat3 !== "none" && cat3 !== '' )
      {
        url = this.com$.getHome() + '/photos/' + cat1 + '/' + cat2 + '/' + cat3;
        this.path = '../galleries/' + cat1 + '/' + cat2 + '/' + cat3 + '/';
        this.lg$.log("Path set to: " + this.path);
      } else
      {
        url = this.com$.getHome() + '/photos/' + cat1 + '/' + cat2;
        this.path = '../galleries/' + cat1 + '/' + cat2 + '/';
        this.lg$.log("Path set to: " + this.path);
      }
  
      this.d$.loadPhotoDetails(url)
        .subscribe(
                  data => this.processResponse(data, this.path, this.aAlbum),
                  error => console.log("===> Error getting list of photos from server."),
                  () => console.log( "<-" + " loadPhotoDetails()")
                );
  
    }
  
  
    processResponse( data, path, album )
    {
      this.lg$.log("-> processResponse()");
      this.lg$.log("     |- data:" + data);
      this.lg$.log("     |- path:" + path);
      this.lg$.log("     |- album:" + album);
      var self = this;
  
      data.forEach(function(row){
        var photo : Media = new Media();
        photo.image = path + row;
        album.push(photo);
        self.lg$.log("         |- added image: " + photo.image );
      });
  
      this.lg$.log("<- processResponse()");
    }
  
    ngOnChanges()
    {
      this.lg$.log("PhotosComponent - ngOnChanges()");
    }
  
    ngOnDestroy()
    {
        this.paramsObservable.unsubscribe();
      }
  }
  
  
  
