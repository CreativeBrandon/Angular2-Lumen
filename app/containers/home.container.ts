import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { HeaderComponent } from '../components/index';

@Component({
    moduleId: module.id,
    selector: 'home-container',
    styles: [],
    directives: [ ROUTER_DIRECTIVES, StoreLogMonitorComponent, HeaderComponent],
    template: `
        <header-component></header-component>
        <h1>Home Page</h1>`
})
export class HomeContainer { }
