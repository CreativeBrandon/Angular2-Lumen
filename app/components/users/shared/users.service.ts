import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { USERS } from './mock-users';

@Injectable()
export class UsersService {
    getUsers(){
        return Promise.resolve(USERS);
    }
}
