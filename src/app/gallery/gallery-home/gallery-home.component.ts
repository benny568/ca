import { Component, OnInit } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css']
})
export class GalleryHomeComponent implements OnInit {
  componentName = 'GalleryHomeComponent';
  logdepth      = 2;

  constructor( private lg$: LoggerService  ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);
  }

  ngOnInit(): void {
  }

}
