import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { ADD_USER, REMOVE_USER, UPDATE_USER, SEED, ADD_NOTIFICATION} from '../actions';
import { HeaderComponent, UsersService, UsersComponent, Users } from '../components/index';
import { Logger } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'users-container',
    styles: [],
    directives: [ HeaderComponent, UsersComponent],
    providers: [UsersService, Logger],
    template: `
        <header-component></header-component>
        <h1>Users Page</h1>
        <users-list [users]="users" [usersSample]="usersSample" [mongoUsers]="mongoUsers"></users-list>
    `
})
export class UsersContainer implements OnInit {

    private users:Users[] = [];
    private usersSample: Object[];
    private mongoUsers: Object[];
    private usersPhotos: Object[];
    private error: any;
    //public accounts: Observable<any>
    public accounts:any;

    constructor(private _store: Store<any>, private usersService: UsersService, private logger: Logger) {
        //this.accounts = _store.select('users');
        _store.select('users')
                .subscribe(users => {
                    this.accounts = users
                });
    }

    ngOnInit(){
        this.getLocalUsers();
        this.getSampleUsers();
        this.getMongoUsers();
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
        .catch(error => {
                this.error = error;
                console.log('fired');
                this.mongoUsers = [{
                    username: 'unknown'
                }];
            }
        );
    }

    private getPhotos(){
        this.usersService.getPhotos()
            .then(photos => {
                this.usersPhotos = photos;
                this._store.dispatch({ type: SEED, payload: photos});
            })
            .catch(error => this.error = error);
    }
 }
