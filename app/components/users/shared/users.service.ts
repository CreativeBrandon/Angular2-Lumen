import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Redux
import { Store } from '@ngrx/store';
import { ADD_USER, REMOVE_USER, UPDATE_USER, SEED } from '../../../store';

import { Config, Logger } from '../../../shared/index';
import { USERS } from './mock-users';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise'; //rxjs/Rx

let api = {
    server: Config.localhost,
    test: Config.api
}

@Injectable()
export class UsersService {
    //public users: Observable<Object[]>
    public users:any;

    constructor(public store: Store<any>, private http: Http, private logger: Logger){
        store.select('users')
                .subscribe(users => {
                    this.users = users
                });
    }

    public getUsers(){
        return Promise.resolve(USERS);
    }

    public getSampleUsers(){
        return this.http.get(api.test + 'users')
            .toPromise()
            .then(response => {
                this.seed(response.json());
                return response.json()
            })
            .catch(this.handleError);
    }

    public getMongoUsers(){
        return this.http.get(api.server + 'users/mongo')
            .toPromise()
            .then(response => response.json().users)
            .catch(this.handleError);
    }

    private seed(data: Object){
        console.log( data );
        this.store.dispatch({ type: 'SEED', payload: data});
        console.log('store: Users = ', this.users);
    }

    public handleError(error: any){
        console.log('Error: ', error.message || error.statusText);
        //this.logger.log(error.message || error.statusText);
        //return Promise.reject(error.message || error);
    }
}
