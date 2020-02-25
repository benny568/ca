import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommonService } from './common.service';
import { LoggerService } from './logger.service';
import { NewsStory } from '../model/news-story';
import { from } from 'rxjs';

@Injectable()
export class NewsService {
    NewsStories: Array<NewsStory>;
    currentStory: NewsStory;

    constructor( private com$: CommonService, 
                 private lg$: LoggerService, 
                 private http$: HttpClient ) {
        this.NewsStories = new Array<NewsStory>();
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
        return this.http$.get( url + 'public/stories' );
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
    }

}