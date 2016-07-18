// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

// bootstraping components
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { provideStore } from '@ngrx/store';

import { usersReducer } from './store/reducers/users';

import {provide, ExceptionHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {CustomExceptionHandler, Logger} from './shared/index';

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS,
        provideStore({ users: usersReducer })
        //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        //provide(ExceptionHandler, {useClass: CustomExceptionHandler})
    ]);
