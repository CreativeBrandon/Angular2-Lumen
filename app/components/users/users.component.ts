import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_USER, REMOVE_USER, UPDATE_USER, SEED, ADD_NOTIFICATION} from '../../actions';
import { Users } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'users-list',
    templateUrl: './users.component.html',
})

export class UsersComponent {

    @Input() users:Users[] = [];
    @Input() usersSample: Object[];
    @Input() mongoUsers: Object[];

    constructor(private _store: Store<any>) {}

    private onAddUser(user: any){
        this._store.dispatch({ type: ADD_USER, payload: user});
    }

    private onRemoveUser(user: Object){
        this._store.dispatch({ type: REMOVE_USER, payload: user});
    }
}
