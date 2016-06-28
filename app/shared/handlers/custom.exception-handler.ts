import {ExceptionHandler, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';

export class CustomExceptionHandler extends ExceptionHandler{

    /*
    constructor(
        @Inject(Http) private _Http: Http){
        super(_Http);
    }*/

    constructor(_logger: any){
        super(_logger);
    }

    call(error: any, stackTrace?: any, reason?: string) {
        // do something with the exception
        console.log('custom exception', error);
    }

    private getHeaders(contentType?: string): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

}
