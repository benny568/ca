import { Component, OnInit } from '@angular/core';

import { LoggerService } from '@src/app/services/logger.service';
import { CommonService } from '@src/app/services/common.service';

@Component({
    moduleId: module.id,
    selector: 'app-club-history',
    templateUrl: './clubhistory.component.html',
    styleUrls: ['./clubhistory.component.css'],
    providers  : [ LoggerService ]
})
export class ClubHistoryComponent implements OnInit {
    componentName = 'ClubHistoryComponent';
    logdepth      = 2;
    history: string = "Avenue United was founded on April 12th 1983 at a meeting in Mickey Kerin's Bar in the \
Lifford area of Ennis. The founding members were David Connellan, Anthony McMahon, Sean Downes and Gerard \
O'Grady who were all from the Marian Avenue and Steele's Terrace area of Ennis. These and other lads from \
'the road' had previously been involved with various soccer teams in Ennis, particularly Lifford F.C. But \
they decided the time was right to branch out and form their own club, based in Marian Avenue and the \
nearby fairgreen pitch.\n\n \
In the club's first season in the Clare & District Soccer League (Div.2 1983-84) the Avenue panel \
comprised exclusively of players from Marian Avenue & Steele's Terrace and included seven sets of \
brothers; Caseys, Mounseys, Purtills, McMahons, Connellans, Lyons and Guilfoyles. They captured the \
Div.2 League and Shield titles without losing a single match and in the subsequent season (1984-85) \
added the Div.1 League and Shield trophies - in the process creating a record of going 42 matches \
without defeat.\n\n \
With promotion to the Premier League in 1985-86 new 'outside' players were drafted in to strengthen the \
panel. During this 3rd season, Avenue reached the semi-final of the Munster Junior Cup, beaten by \
Ballincollig of Cork 2 - nil, at Turner's Cross.  They won their first Munster Junior (Clare Area) \
final against a previously dominant Newmarket Celtic and won the prestigious Haughey Cup also against \
Newmarket after a replay. This was to be the first of an historic three-in-a-row Haughey Cup wins. \
'The Avenue' had truly arrived at this stage but the best was yet to come. In 1987-88 the club won the \
only ever Clare 'Grand Slam' of Premier League and Shield, Haughey Cup, Munster & FAI Clare Area Finals \
. Such was their supremacy at the time that their Haughey Cup final win was by a score line of 6-nil! \
In the following years the club progressed, fielding successful Youths and 'B' teams, and later again, \
Schoolboys teams. In 1990 Avenue United became the first Clare Club ever to reach the FAI Junior Cup \
Final after a great campaign. In the final in Dalymount, they were beaten by a superb Cherry Orchard \
side, 2-nil.\n\n \
Throughout the following years Avenue United maintained a high standard, capturing the Clare Cup in its \
various guises, the Cheers Cup, Carling Cup, Prego Cup and the Clare Junior Cup. In addition, regular \
Premier League titles were captured since 1988. The club has also fielded a very successful 'B' team \
over the years. Up to 2007, no season had ever passed without some Junior silverware being won or \
shared.\n\n \
In 1996 the club expanded by gradually adding Schoolboys teams and have since fielded U/8 to U/17 teams \
plus Youths (U/18) with great success. The club also runs a successful 'Avenue Academy' for over one \
hundred 5-10 year olds who subsequently feed into the club's various schoolboy's teams. \
In 2008, the club celebrated their 25th Anniversary with a series of events including the publication of \
a book on the history of the club by local author Ollie Byrnes. In 2012 Avenue United purchased their \
own grounds at Roslevan, Ennis and have made that their home for the years ahead.";

    // imageUrl: string = "https://via.placeholder.com/20";
    imageUrl: string = "http://avenueunited.ie.mocha6004.mochahost.com/galleries/2019/JuniorA/JuniorA-2019.jpg";
    
    constructor( private lg$    : LoggerService,
                 private common$: CommonService ) {
        this.lg$.setLogHdr(this.logdepth, this.componentName);
    }

    ngOnInit() {
    }

}