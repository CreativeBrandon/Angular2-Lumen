import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Config, Logger } from '../../../shared/index';
import { USERS } from './mock-users';
import 'rxjs/add/operator/toPromise'; //rxjs/Rx

let api = {
    server: Config.localhost,
    test: Config.api
}

@Injectable()
export class UsersService {

    constructor(private http: Http, private logger: Logger){}

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
            .catch(this.handleError);
    }

    public getPhotos(){
        return this.http.get(api.test + 'photos')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    public handleError(error: any){
        console.log('Error: ', error.message || error.statusText);
        //this.logger.log(error.message || error.statusText);
        //return Promise.reject(error.message || error);
    }
}
