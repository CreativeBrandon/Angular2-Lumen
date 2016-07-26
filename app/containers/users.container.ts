import { Component } from '@angular/core';
import { UsersComponent } from '../components/index';

@Component({
    moduleId: module.id,
    selector: 'users-container',
    styles: [],
    directives: [ UsersComponent],
    template: `<h1>Users Page</h1>
               <users-list></users-list>
    `
})
export class UsersContainer { }
