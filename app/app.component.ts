import { Component } from '@angular/core';

import { UsersComponent } from './components/users/users.component';

@Component({
    selector: 'my-app',
    styles: [],
    template: '<h1>My First Angular 2 App</h1><users-list></users-list>',
    directives: [UsersComponent]
})
export class AppComponent { }
