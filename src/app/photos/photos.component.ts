import { Component, OnInit }   from '@angular/core';
import { ActivatedRoute }      from '@angular/router';

import { Media } 				from '../model/media';
import { SessionDataService }   from '../services/session-data.service';
import { LoggerService }        from '../services/logger.service';
import { CommonService }        from '../services/common.service';

@Component({
  selector   : 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls  : ['./photos.component.css'],
  providers  : [ LoggerService ]
})
export class PhotosComponent implements OnInit {
	componentName   : string = 'PhotosComponent';
	path            : string = '';
	logdepth        : number = 1;
	paramsObservable: any;
	display         : boolean;
	photos          : Media[];

	constructor( private lg$  : LoggerService,
	             private com$ : CommonService,
	             public  d$   : SessionDataService,
	             private route: ActivatedRoute ) {
		this.lg$.setLogHdr(this.logdepth, this.componentName);

    	this.lg$.log("PhotosComponent - constructor()");

		this.display = true;
	}

	ngOnInit()
	{
		let cat1           = '';                  //this.routeParams.get('cat1'); // team
		let cat2           = '';                  //this.routeParams.get('cat2'); // year
		let cat3           = '';                  //this.routeParams.get('cat3'); // event
		var url            = '';
		this.d$.aAlbum = new Array<Media>();

		this.lg$.log("PhotosComponent - ngOnInit()")

		this.paramsObservable = this.route.params.subscribe(params =>
		{
			cat1         = params['cat1'];
			cat2         = params['cat2'];
			cat3         = params['cat3'];
			this.display = false;
			// https://avenueunited.ie.mocha6004.mochahost.com/galleries/2007/Academy/U8/02092007178.jpg


			this.lg$.log("-> parm change (" + cat1 + "/" + cat2 + "/" + cat3 + ")");

			if ( cat3 !== "none" && cat3 !== '' && cat3 !== undefined )
			{
				url       = this.com$.getHome() + 'backend/public/photos/' + cat1 + '/' + cat2 + '/' + cat3;
				this.path = '~/assets/galleries/' + cat1 + '/' + cat2 + '/' + cat3 + '/';
				this.lg$.log("[3 Params] Path set to: " + this.path);
			} else
			{
				url       = this.com$.getHome() + 'backend/public/photos/' + cat1 + '/' + cat2;
				this.path = '~/assets/galleries/' + cat1 + '/' + cat2 + '/';
				this.lg$.log("[2 Params] Path set to: " + this.path);
			}

			this.d$.loadPhotoDetails(url)
				.subscribe(
		            	(data: [any]) => this.processResponse(data, this.path, this.d$.aAlbum),
		            	error         => console.log("===> Error getting list of photos from server."),
		            	()            => console.log( "<-" + " loadPhotoDetails()")
		            );
		});

	}

	ngOnChanges()
	{
		this.lg$.log("PhotosComponent - ngOnChanges()");
	}


	processResponse( data: [any], path: string, album: Array<Media> )
	{
		this.lg$.log("-> processResponse()");
		this.lg$.log("     |- data:" + data);
		this.lg$.log("     |- path:" + path);
		this.lg$.log("     |- album:" + album);
		var self = this;
		var file;

		this.com$.clearArray( album, this.lg$ );

		data.forEach(function(row){
			var photo : Media = new Media();
			    photo.image   = path + row;
				// photo.image = "~/assets/img/tiles/academy.png";
			album.push(photo);
			self.lg$.log("         |- added image: " + photo.image );
		});

		this.lg$.trace("## Album contains: ");
		this.d$.printAlbum();

		self.display = true;
		this.d$.aAlbum.forEach( function(photo){
			self.lg$.log("Album photo: " + photo.image);
			
		})
		this.photos = this.d$.aAlbum;
		this.lg$.log("<- processResponse()");
	}

	ngOnDestroy()
	{
    	this.paramsObservable.unsubscribe();
  	}
}