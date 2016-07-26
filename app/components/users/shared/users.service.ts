import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise'; //rxjs/Rx

import { Config, Logger } from '../../../shared/index';
import { USERS } from './mock-users';
// Notify
import { Notify } from '@ngrx/notify';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

let api = {
    server: Config.localhost,
    test: Config.api
}

@Injectable()
export class UsersService {

    constructor(private http: Http, private logger: Logger, private notify: Notify){}

    public getUsers(){
        return Promise.resolve(USERS);
    }

    public getSampleUsers(){
        return this.http.get(api.test + 'users')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    public getMongoUsers(){
        return this.http.get(api.server + 'users/mongo')
            .toPromise()
            .then(response => response.json().users)
            .catch(error => this.handleError(error, 'Error getting user data from mongoDB'));
    }

    public getPhotos(){
        return this.http.get(api.test + 'photos')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private notifyOptions(body:string = 'Message Body'):Object{
        let options:Object = {
            body: body,
            icon: '',
            renotify: true
        }
        return options;
    }

    private handleError(error: any, message: string = ''){
        this.logger.log('error', message, error);
        /*this.notify.open('Error getting data:', this.notifyOptions )
            .takeUntil(Observable.timer(5000))
            .take(1)
            .subscribe( error =>{
                this.notification = error
            });*/
        //this.logger.log(error.message || error.statusText);
        //return Promise.reject(error.message || error);
    }
}
