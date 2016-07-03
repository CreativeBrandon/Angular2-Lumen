import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { USERS } from './mock-users';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/toPromise'; //rxjs/Rx

let api = {
    server: 'http://localhost:8000/',
    test: 'http://jsonplaceholder.typicode.com/'
}

@Injectable()
export class UsersService {

    constructor(private http: Http){}

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

    private handleError(error: any){
        console.error('an error occured', error);
        return Promise.reject(error.message || error);
    }
}
