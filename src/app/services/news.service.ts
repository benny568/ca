import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommonService } from './common.service';
import { LoggerService } from './logger.service';
import { NewsStory } from '../model/news-story';



@Injectable()
export class NewsService {
    NewsStories: Array<NewsStory>;
    currentStory: NewsStory;
    componentName = 'NewsService';
    logdepth      = 3;

    constructor( private com$: CommonService, 
                 private lg$: LoggerService, 
                 private http$: HttpClient ) {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.NewsStories = new Array<NewsStory>();
        //this.NewsStories = [{"nsid":1,"category":"G","title":"200 Club","description":"July draw results","story":"The Winner of the July 200 Club Draw 1st Prize €750 was Ursula OReilly. The €50 Runners Up were John OMalley, Gary Seery and Decky Ryan. Congrats to all.","image":"assets/img/news/and-the-winner-is.jpg","thumb":null},{"nsid":2,"category":"G","title":"The Avenue Academy is back !!!","description":"Starting on Sept 14th - register now","story":"Dear Parent/Guardian,\r\n\r\nCoaching  takes place from 9.30 – 10.30 each Saturday morning on the Astroturf Pitch at Lees Road. NB Weather Permitting.        \r\n\r\nTo book a place in the Academy for season 2019 – 2020 please download ClubZap app and pay your 2019 Avenue Utd. membership online to secure your child’ s place.\r\n\r\n","image":"assets/img/news/academy.png","thumb":null},{"nsid":3,"category":"G","title":"How to install ClubZap on your phone","description":"Easy to follow steps","story":"Follow the 4 steps on the image opposite. Then, select  “My Club” option at bottom right hand corner of the screen. There you will be presented with tile to pay club membership online.","image":"assets/img/news/ClubZap.png","thumb":null},{"nsid":4,"category":"","title":" Euronics O'Flaherty Electric Sponsorship","description":"A big thank you","story":"A big thank you to Euronics O'Flaherty Electric on their sponsorship of the Avenue A team jersey. ","image":"assets/img/news/JuniorA-2019.jpg","thumb":null},{"nsid":11,"category":"G","title":"New!","description":"Avenue United Enamel Badge","story":"The club are selling enamel badges for €5. If anyone is interested drop us a message, email or call us.","image":"assets/img/news/badge.png","thumb":null},{"nsid":12,"category":"G","title":"Tierney's Costcutter sponsor U14s","description":"Many thanks to John and his staff","story":"The club would like to thank John and his staff at Tierney's Costcutter on the the Tulla Road for their kind sponsorship of a set of jerseys for our U14 team. We would ask our members to return the favour by supporting our sponsors whenever possible.","image":"assets/img/news/costcutter.jpg","thumb":null},{"nsid":13,"category":"G","title":"Rochfords Pharmacy sponsor 2008 teams","description":"Big thanks to Brendan and Audrey!","story":"A sincere thank you to Audrey and Brendan Rochford of Rochfords Pharmacy for kindly sponsoring sets of jerseys for our 2008s teams.","image":"assets/img/news/2018-2.jpg","thumb":null},{"nsid":14,"category":"G","title":"McDonalds of Ennis sponor U13s","description":"Looking good!","story":"The club would like to thank Kieran, Niamh and the staff at McDonald's Ennis and Shannon for kindly sponsoring a set of jerseys for our U13 team.","image":"assets/img/news/mcd.jpg","thumb":null}];
    }

    /**********************************************************
     * Name       : loadNewsStories()
     * Description: Retrieves a list of Newws from the server
     * Scope      : Externally accessible
     * Params in  : None
     * Return     : Observable
     **********************************************************/
    public loadNewsStories( type?: string )
    {
        this.lg$.log('-->' + 'loadNewsStories()..');
        const url = this.com$.getHome();

        // If it's the Academy asking for news....
        // if( type === 'A'){
        //   return this.http$.get( url + 'public/stories/A' );
        // }
        // Else...
        this.lg$.log("===>>> Hitting endpoing: " + url + 'backend/public/stories');
        return this.http$.get( url + 'backend/public/stories' );
     }

    /**********************************************************
     * Name       : setNews()
     * Description: Setter for array of news stories
     * Scope      : Externally accessible
     * Params in  : Array of news stories
     * Return     : None
     **********************************************************/
     public setNews( data: [NewsStory] )
    {
    	this.lg$.log('->' + 'setNews()...recieved news stories');
        this.NewsStories = data;
        this.currentStory = this.NewsStories[0];
        this.printStoryInfo();
        this.lg$.log('<- setNews(): set current story to: ' + this.currentStory.title);
    }

    /************************************************************
     * Name       : createNews()
     * Description: Create news stories if no db is available
     * Scope      : Publicly accessible
     * Params in  : None
     * Return     : Array of news stories
     ***********************************************************/
    public createNews(): NewsStory[] {
        this.lg$.log("=> createNews()...");
        let news: NewsStory[] = 
          [
            {
                "nsid": 1,
                "category": "G",
                "title": "200 Club",
                "description": "July draw results",
                "story": "The Winner of the July 200 Club Draw 1st Prize €750 was Ursula OReilly. The €50 Runners Up were John OMalley, Gary Seery and Decky Ryan. Congrats to all.",
                "image": "assets/img/news/and-the-winner-is.jpg",
                "thumb": null
            },
            {
                "nsid": 2,
                "category": "G",
                "title": "The Avenue Academy is back !!!",
                "description": "Starting on Sept 14th - register now",
                "story": "Dear Parent/Guardian,\r\n\r\nCoaching  takes place from 9.30 – 10.30 each Saturday morning on the Astroturf Pitch at Lees Road. NB Weather Permitting.        \r\n\r\nTo book a place in the Academy for season 2019 – 2020 please download ClubZap app and pay your 2019 Avenue Utd. membership online to secure your child’ s place.\r\n\r\n",
                "image": "assets/img/news/academy.png",
                "thumb": null
            },
            {
                "nsid": 3,
                "category": "G",
                "title": "How to install ClubZap on your phone",
                "description": "Easy to follow steps",
                "story": "Follow the 4 steps on the image opposite. Then, select  “My Club” option at bottom right hand corner of the screen. There you will be presented with tile to pay club membership online.",
                "image": "assets/img/news/ClubZap.png",
                "thumb": null
            },
            {
                "nsid": 4,
                "category": "",
                "title": " Euronics O'Flaherty Electric Sponsorship",
                "description": "A big thank you",
                "story": "A big thank you to Euronics O'Flaherty Electric on their sponsorship of the Avenue A team jersey. ",
                "image": "assets/img/news/JuniorA-2019.jpg",
                "thumb": null
            },
            {
                "nsid": 11,
                "category": "G",
                "title": "New!",
                "description": "Avenue United Enamel Badge",
                "story": "The club are selling enamel badges for €5. If anyone is interested drop us a message, email or call us.",
                "image": "assets/img/news/badge.png",
                "thumb": null
            },
            {
                "nsid": 12,
                "category": "G",
                "title": "Tierney's Costcutter sponsor U14s",
                "description": "Many thanks to John and his staff",
                "story": "The club would like to thank John and his staff at Tierney's Costcutter on the the Tulla Road for their kind sponsorship of a set of jerseys for our U14 team. We would ask our members to return the favour by supporting our sponsors whenever possible.",
                "image": "assets/img/news/costcutter.jpg",
                "thumb": null
            },
            {
                "nsid": 13,
                "category": "G",
                "title": "Rochfords Pharmacy sponsor 2008 teams",
                "description": "Big thanks to Brendan and Audrey!",
                "story": "A sincere thank you to Audrey and Brendan Rochford of Rochfords Pharmacy for kindly sponsoring sets of jerseys for our 2008s teams.",
                "image": "assets/img/news/2018-2.jpg",
                "thumb": null
            },
            {
                "nsid": 14,
                "category": "G",
                "title": "McDonalds of Ennis sponor U13s",
                "description": "Looking good!",
                "story": "The club would like to thank Kieran, Niamh and the staff at McDonald's Ennis and Shannon for kindly sponsoring a set of jerseys for our U13 team.",
                "image": "assets/img/news/mcd.jpg",
                "thumb": null
            }
        ];
        this.lg$.log("<= createNews()");
        return news;
      }

    public printStoryInfo()
    {
      this.lg$.log("==> printStoryInfo()");
      
      for( let i=0; i < this.NewsStories.length; i++ )
      {
        this.lg$.log("Story " + i + ":");
        this.lg$.log("    Title:   " + this.NewsStories[i].title);
        this.lg$.log("    Description:   " + this.NewsStories[i].description);
        this.lg$.log("    Story:   " + this.NewsStories[i].story);
        this.lg$.log("    Image:   " + this.NewsStories[i].image);
      }
        
    }

}