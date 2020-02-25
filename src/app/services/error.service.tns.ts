import { Injectable }  from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';

import { LoggerService, LogType } from '../services/logger.service';

@Injectable()
export class ErrorService {
  
      logdepth = 3;
      serviceName = 'ErrorService';
      msgDuration = 5000; // 5 seconds
      lg$: LoggerService;
  
       constructor (  ) {
        this.lg$ = new LoggerService();
        this.lg$.setLogHdr(this.logdepth, this.serviceName);
       }
  
      /**********************************************************
       * Name:		openAlert()
       * Description:
       * Params in:
       * Return:
       **********************************************************/
      public openAlert( msg: string ): void {
        this.lg$.log("########## INSIDE OPEN ALERT!!");

        console.log(msg);

      }

        /**********************************************************
         * Name       : handleHttpError()
         * Description: Called when there's an error on a http call
         * Scope    : Externally accessible
         * Params in: Date
         * Return   : None.
         **********************************************************/
        public handleError(error: Response) {
          let msg = 'You do not have permissions to perform this action!';
  
          switch( error.status )
          {
            case 400:
              this.lg$.error("BAD REQUEST!");
              console.log( "You have sent a bad request to the server!", 'Error');
              break;
            case 403:
              this.lg$.error("You do not have permissions to perform this action!");
              console.log( "You do not have permissions to perform this action!", 'Error');
              break;
            case 404:
              this.lg$.error("Requested data not found!");
              console.log( "The data you requested was not found by the server!", 'Error' );
              break;
            default:
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              this.lg$.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.body}`);
                break;
          }
          // return an observable with a user-facing error message
          return throwError(
            'Something bad happened; please try again later.');
        };
  
  
  }