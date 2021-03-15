import { Routes } from '@angular/router';

import { InformationComponent } from "./information.component";
import { ClubHistoryComponent } from "./clubhistory/clubhistory.component";
import { LinksComponent } from "./links/links.component";
import { DownloadsComponent } from "./downloads/downloads.component";
import { FindUsComponent } from "./find-us/find-us.component";
import { MessageUsComponent } from "./message-us/message-us.component";
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: "", component: InformationComponent },
    { path: "clubhistory", component: ClubHistoryComponent },
    { path: "links", component: LinksComponent },
    { path: "downloads", component: DownloadsComponent },
    { path: "find-us", component: FindUsComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "message-us", component: MessageUsComponent }
];