/**
* Root Component
*/
import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/users']">Users</a>
        <router-outlet></router-outlet>
        <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    `
})
export class AppComponent { }
