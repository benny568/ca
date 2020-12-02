import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';
import { NewsService } from '@src/app/services/news.service';
import { NewsStory } from '@src/app/model/news-story';


@Component({
    selector   : 'news',
    templateUrl: './news.component.html',
    styleUrls  : ['./news.component.css'],
    providers  : [ LoggerService ]
})

export class NewsComponent {

    componentName = 'NewsComponent';
    logdepth      = 2;
    serverUrl: String;
    theNews: NewsStory[];


    constructor( private lg$: LoggerService,
                 private common$: CommonService,
                 public news$: NewsService,
                 public router: Router ) { }

    ngOnInit() {
      this.lg$.setLogHdr(this.logdepth, this.componentName);
      var subscriber = this.news$.loadNewsStories();
      subscriber.subscribe(
                    (data: [NewsStory]) => this.news$.setNews(data),
                    error               => {this.lg$.error("===> Error getting news from server: " + JSON.stringify(error)); this.createNews();},
                    ()                  => this.lg$.log(" <=== Received news from server. <====")
                  );
        this.serverUrl = this.common$.getHome();
        this.lg$.log("ngOnInit() - serverUrl set to: " + this.serverUrl);
    }

    public onItemTap(args) {
      this.lg$.log("Story was clicked in position: " + args.index );
      this.news$.currentStory = this.news$.NewsStories[args.index];
      this.router.navigate(["home/story"]);
    }

    public onItemClickweb( story: NewsStory )
    {
        this.news$.currentStory = story;
        this.lg$.log("Story was clicked in position: " + this.news$.currentStory.nsid );
        this.router.navigate(["home/story"]);
    }

    private createNews() {
      this.lg$.log("=> this.createNews()...");
      this.theNews = 
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
      ]
    }

}