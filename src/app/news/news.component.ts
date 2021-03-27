import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { Router } from '@src/app/common/index';

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

    componentName: string = 'NewsComponent';
    logdepth     : number = 2;
    serverUrl    : String;
    theNews      : NewsStory[];


    constructor( private lg$: LoggerService,
                 private common$: CommonService,
                 public news$: NewsService,
                 public router: Router ) { }

    ngOnInit() {
      this.lg$.setLogHdr(this.logdepth, this.componentName);
      var subscriber = this.news$.loadNewsStories();
      subscriber.subscribe(
                    (data: [NewsStory]) => this.news$.setNews(data),
                    error               => {this.lg$.error("===> Error getting news from server: " + JSON.stringify(error)); /*this.createNews();*/},
                    ()                  => this.lg$.log(" <=== Received news from server. <====")
                  );
        this.serverUrl = this.common$.getHome();
        this.lg$.log("ngOnInit() - serverUrl set to: " + this.serverUrl);
    }

    public onItemTap(args) {
      this.lg$.log("[Mobile] Story was clicked in position: " + args.index );
      this.news$.currentStory = this.news$.NewsStories[args.index];
      this.router.navigate(["home/story"]);
    }

    public onItemClickweb( story: NewsStory )
    {
        this.news$.currentStory = story;
        this.lg$.log("[Web] Story was clicked in position: " + this.news$.currentStory.nsid );
        this.router.navigate(["home/story"]);
    }

}