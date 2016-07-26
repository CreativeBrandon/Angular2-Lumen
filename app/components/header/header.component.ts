import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    directives: [ROUTER_DIRECTIVES],
    template:`
        <header>
            <nav>
                <a [routerLink]="['/']">Home</a>
                <a [routerLink]="['/users']">Users</a>
            </nav>
        </header>
    `
})
export class HeaderComponent{}
