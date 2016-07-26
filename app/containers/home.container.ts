import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

@Component({
    moduleId: module.id,
    selector: 'home-container',
    styles: [],
    directives: [ StoreLogMonitorComponent],
    template: `<h1>Home Page</h1>`
})
export class HomeContainer { }
