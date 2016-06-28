import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { USERS } from './mock-users';
import {Observable} from 'rxjs/observable';

@Injectable()
export class UsersService {

    constructor(private Http: Http){}

    private mongoApi = 'http://localhost:8000/users/mongo';

    getUsers(){
        return Promise.resolve(USERS);
    }

    /*
    getMongoUsers(): Promise<USERS[]>{
        return this.Http.get('http://localhost:8000/users/mongo')
            .map((response: Response) => <Users[]>response.json().data);
    }
    */
}
