import { Component } from '@angular/core';
import { HeaderComponent, UsersComponent } from '../components/index';

@Component({
    moduleId: module.id,
    selector: 'users-container',
    styles: [],
    directives: [ HeaderComponent, UsersComponent],
    template: `
        <header-component></header-component>
        <h1>Users Page</h1>
        <users-list></users-list>
    `
})
export class UsersContainer { }
