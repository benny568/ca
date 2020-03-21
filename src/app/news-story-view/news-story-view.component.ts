import { Component } from '@angular/core';

import { CommonService } from '@src/app/services/common.service';
import { LoggerService } from '@src/app/services/logger.service';
import { NewsService } from '@src/app/services/news.service';
import { NewsStory } from '@src/app/model/news-story';

@Component({
    moduleId: module.id,
    templateUrl: './news-story-view.component.html',
    styleUrls: ['./news-story-view.component.css'],
    providers: [LoggerService]
})

export class NewsStoryViewComponent {
    componentName = 'NewsStoryViewComponent';
    logdepth      = 2;
    serverUrl: String;
    story: NewsStory;

    constructor( private lg$: LoggerService,
                 private news$: NewsService, 
                 private com$: CommonService ) {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
        this.serverUrl = this.com$.getHome();
        this.story = this.news$.currentStory;
        this.lg$.log("Story set to : " + this.story.title);
    }
}