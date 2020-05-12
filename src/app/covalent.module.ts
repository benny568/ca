import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentFileModule } from '@covalent/core/file';
import { CovalentChipsModule } from '@covalent/core/chips';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';
import { CovalentJsonFormatterModule } from '@covalent/core/json-formatter';
import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentCommonModule } from '@covalent/core/common';

// import { CovalentHttpModule } from '@covalent/http';
// import { CovalentHighlightModule } from '@covalent/highlight';
// import { CovalentMarkdownModule } from '@covalent/markdown';
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
// import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http';
// import { CovalentHighlightModule } from '@covalent/highlight';
// import { CovalentMarkdownModule } from '@covalent/markdown';
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
// other imports
@NgModule({
  imports: [
    CommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentExpansionPanelModule,
    CovalentFileModule,
    CovalentChipsModule,
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentDataTableModule,
    CovalentVirtualScrollModule,
    CovalentJsonFormatterModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMessageModule,
    CovalentSearchModule,
    CovalentMediaModule,
    CovalentCommonModule,
    // CovalentHttpModule.forRoot(),
    // CovalentHighlightModule,
    // CovalentMarkdownModule,
    // CovalentDynamicFormsModule
  ],
  exports: [
    CommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentExpansionPanelModule,
    CovalentFileModule,
    CovalentChipsModule,
    CovalentLoadingModule,
    CovalentDialogsModule,
    CovalentDataTableModule,
    CovalentVirtualScrollModule,
    CovalentJsonFormatterModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMessageModule,
    CovalentSearchModule,
    CovalentMediaModule,
    CovalentCommonModule,
    // CovalentHighlightModule,
    // CovalentMarkdownModule,
    // CovalentDynamicFormsModule
  ]
})
export class CovalentModule { }