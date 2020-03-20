import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';


//import { DatepickerLocale, APP_DATE_FORMATS } from './date-picker/datepicker-local.component';

@NgModule({
    imports: [
        MatMenuModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatTableModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule
    ],
    exports: [
        MatMenuModule,
        MatTooltipModule,
        MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule
    ],
    providers: [
        // {
        //   provide: DateAdapter,
        //   useClass: AppDateAdapter
        // },
        // { 
        //     provide: MAT_DATE_FORMATS, 
        //     useValue: APP_DATE_FORMATS 
        // },
        // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
      ]
})

export class MaterialModule { }