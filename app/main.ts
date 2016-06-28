// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

// bootstraping components
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {provide, ExceptionHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {CustomExceptionHandler} from './shared/index';

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS
        //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        //provide(ExceptionHandler, {useClass: CustomExceptionHandler})
    ]);
