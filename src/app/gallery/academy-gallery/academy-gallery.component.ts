import { Component, OnInit } from '@angular/core';
import { Router,
         ActivatedRoute,
         Params          }    from '@angular/router';


import { Media } 			  from '../../model/media';
import { SessionDataService } from '../../services/session-data.service';
import { LoggerService }      from '../../services/logger.service';
import { CommonService }      from '../../services/common.service'
import { NewsService }        from '../../services/news.service';

@Component({
  selector   : 'app-academy-gallery',
  templateUrl: './academy-gallery.component.html',
  styleUrls  : ['./academy-gallery.component.css'],
  providers  : [ LoggerService ],
  moduleId   : module.id
})
export class AcademyGalleryComponent implements OnInit {
  componentName : string = 'AcademyGalleryComponent';
	aAlbum      : Array<Media>;
	path        : string = '';
	logdepth    : number = 1;
	tiles       : Media[];
	title       : String = "This is the title bar.";
	
	constructor( private lg$: LoggerService, 
	             private d$: SessionDataService,
				 private com$: CommonService,
				 private route: ActivatedRoute,
				 private news$: NewsService 
			   ) 
	{
		this.lg$.setLogHdr(this.logdepth, this.componentName);

    	this.lg$.log("constructor()");

		this.tiles = [
			{ type:"photo",title:"2007",description:"",image:"~/assets/img/tiles/academy.png",thumb:""},
			{ type:"photo",title:"2008",description:"",image:"~/assets/img/tiles/a-team.jpg",thumb:""},
			{ type:"photo",title:"2009",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
			{ type:"photo",title:"2010",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
		  ];
		  
	}

	ngOnInit()
	{
		let cat1: String = '2007'; // team
		let cat2: String = 'Academy'; // year
		let cat3: String = 'U8'; // event
		// let cat1 = ''; // team
		// let cat2 = ''; // year
		// let cat3 = ''; // event
		var url = '';
		this.aAlbum = new Array<Media>();

		// this.route.params.forEach((params: Params) => {
		// 	cat1 = params['cat1'];
		// 	cat2 = params['cat2'];
		// 	cat3 = params['cat3'];
		// });

		// this.lg$.log("-> OnInit(" + cat1 + "/" + cat2 + "/" + cat3 + "," + ")");

		// if ( cat3 !== "none" && cat3 !== '' )
		// {
		// 	url = this.com$.getHome() + 'backend/public/photos/' + cat1 + '/' + cat2 + '/' + cat3;
		// 	this.path = '~/assets/img/gallery/' + cat1 + '/' + cat2 + '/' + cat3 + '/';
		// 	this.lg$.log("Path set to: " + this.path);
		// } else
		// {
		// 	url = this.com$.getHome() + '/photos/' + cat1 + '/' + cat2;
		// 	this.path = '~/assets/img/gallery/' + cat1 + '/' + cat2 + '/';
		// 	this.lg$.log("Path set to: " + this.path);
		// }

		this.populateAlbum();

		// this.d$.loadPhotoDetails(url)
		// 	.subscribe(
	    //         	data => this.processResponse(data, this.path, this.aAlbum),
	    //         	error => console.log("===> Error getting list of photos from server."),
	    //         	() => console.log( "<-" + " loadPhotoDetails()")
	    //         );

	}


	processResponse( data, path, album )
	{
		this.lg$.log("-> processResponse()");
		this.lg$.log("     |- data:" + data);
		this.lg$.log("     |- path:" + path);
		this.lg$.log("     |- album:" + album);
		var self = this;
		// https://avenueunited.ie.mocha6004.mochahost.com/galleries/2007/Academy/U8/02092007178.jpg

		data.forEach(function(row){
			var photo : Media = new Media();
			photo.image = path + row;
			album.push(photo);
			self.lg$.log("         |- added image: " + photo.image );
		});

		this.lg$.log("<- processResponse()");
	}

	populateAlbum()
	{
		this.aAlbum = [
			{ type:"photo",title:"2007",description:"",image:"~/assets/img/tiles/academy.png",thumb:""},
			{ type:"photo",title:"2008",description:"",image:"~/assets/img/tiles/a-team.jpg",thumb:""},
			{ type:"photo",title:"2009",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
			{ type:"photo",title:"2010",description:"",image:"~/assets/img/clubCrest.png",thumb:""},
		  ];
	}

	onItemTap(args) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.aAlbum[args.index].image}`);
		for( let key in args )
		{
			this.lg$.log(`${key}: ${args[key]}`);
		}
		
    }
}


