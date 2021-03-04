import { Component } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';

class Link {
  image: string;
  description: string;
};

@Component({
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent {
  componentName = 'LinksComponent';
  logdepth      = 2;

  public cdslImage = "~/assets/img/links/CDSL_Crest.jpg";
  public csslImage = "~/assets/img/links/cssl.jpeg";
  public faiImage = "~/assets/img/links/fai-crest.png";

  links: Link[];

  constructor( private lg$: LoggerService ) 
  {
    this.lg$.setLogHdr(this.logdepth, this.componentName);

    this.links = new Array<Link>();
    this.getLinks();
    this.printLinks();
  } 

  getLinks()
  {
    this.links.push({"image":this.cdslImage, "description":"Clare District Schoolboys League"});
    this.links.push({"image":this.csslImage, "description":"Clare Schoolboys League"});
    this.links.push({"image":this.faiImage, "description":"FAI website"});
  }

  printLinks() 
  {
    for( let i=0; i< this.links.length; i++ )
    {
      this.lg$.log("Image: " + this.links[i].image);
      this.lg$.log("Description: " + this.links[i].description);
    }
  }

}