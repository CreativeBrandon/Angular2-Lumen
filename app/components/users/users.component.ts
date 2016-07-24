import { Component, OnInit } from '@angular/core';

import { Users} from "./shared";
import { UsersService} from "./shared/users.service";
import { Logger } from '../../shared/index'
//import { Foo, FooService } from "../foo";

import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { ADD_USER, REMOVE_USER, UPDATE_USER, SEED} from '../../actions';

@Component({
  selector: 'users-list',
  moduleId: module.id,
  templateUrl: './users.component.html',
  providers: [UsersService, Logger]
})

export class UsersComponent implements OnInit {
    users:Users[] = [];
    usersSample: Object[];
    mongoUsers: Object[];
    usersPhotos: Object[];
    error: any;
    //public accounts: Observable<any>
    public accounts:any;

    constructor(private _store: Store<any>, private usersService: UsersService, private logger: Logger) {
        //this.accounts = _store.select('users');
        _store.select('users')
                .subscribe(users => {
                    this.accounts = users
                });
    }

    ngOnInit() {
        this.getLocalUsers();
        this.getSampleUsers();
        this.getMongoUsers();
        //this.getPhotos();
    }

    private seed(data:Object){
        this._store.dispatch({ type: SEED, payload: data });
    }

    private getPhotos(){
        this.usersService.getPhotos()
            .then(photos => {
                this.usersPhotos = photos;
                this._store.dispatch({ type: SEED, payload: photos});
            })
            .catch(error => this.error = error);
    }

    private onAddUser(user: Object){
        this._store.dispatch({ type: ADD_USER, payload: user});
    }

    private onRemoveUser(user: Object){
        this._store.dispatch({ type: REMOVE_USER, payload: user});
    }

    private getLocalUsers(){
        this.usersService.getUsers()
        .then(users => this.users = users);
    }

    private getSampleUsers(){
        this.usersService.getSampleUsers()
        .then(usersSample => {
            this.usersSample = usersSample;
        })
        .catch(error => this.error = error);
    }

    private getMongoUsers(){
        this.usersService.getMongoUsers()
        .then(mongoUsers => this.mongoUsers = mongoUsers)
        .catch(error => this.error = error);
    }
}
