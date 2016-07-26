import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { ADD_USER, REMOVE_USER, UPDATE_USER, SEED, ADD_NOTIFICATION} from '../actions';

export interface ILogger {
    success?: string;
    warning?: string;
    errorr?:  string;
    info?: string;
    data?: Object;
}

@Injectable()
export class Logger {

    constructor(private _store: Store<any>){}

    public log(type:ILogger = 'info', message: any = 'message not provided', data:ILogger = {}) {
        console.log('message logged: ', message);
        let payload = {
            type: type,
            message: message,
            data: data
        }
        this._store.dispatch({ type: ADD_NOTIFICATION, payload: payload});
    }
}
