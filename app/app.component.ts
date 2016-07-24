import { Component } from '@angular/core';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { UsersComponent } from './components/users/users.component';

@Component({
    selector: 'my-app',
    styles: [],
    directives: [ StoreLogMonitorComponent, UsersComponent],
    template: `<h1>My First Angular 2 App</h1><users-list></users-list>
                <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
                `
})
export class AppComponent { }
