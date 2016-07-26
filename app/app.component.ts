/**
* Root Component
*/
import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { Notify } from '@ngrx/notify';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, StoreLogMonitorComponent],
    template: `
        <router-outlet></router-outlet>
        <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    `
})
export class AppComponent {
    constructor(notify: Notify){
        notify.requestPermission().subscribe(permission =>{
            if(permission){}
        })
    }
}
