import { Component, OnInit } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';

@Component({
  selector: 'app-academy-news',
  templateUrl: './academy-news.component.html',
  styleUrls: ['./academy-news.component.css']
})
export class AcademyNewsComponent implements OnInit {
  componentName = 'AcademyNewsComponent';
  logdepth      = 2;

  constructor( private lg$: LoggerService  ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  ngOnInit(): void {
  }

}
