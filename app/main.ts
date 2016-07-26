// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

// bootstraping components
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide, ExceptionHandler } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NOTIFY_PROVIDERS, NOTIFY_GLOBAL_OPTIONS } from '@ngrx/notify';

// REDUX
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor, StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { usersReducer, notificationReducer } from './store/index';

// Components
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { CustomExceptionHandler, Logger } from './shared/index';

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS,
        NOTIFY_PROVIDERS,
        { provide: NOTIFY_GLOBAL_OPTIONS, multi: true, useValue: { /* global options here */ } },
        appRouterProviders,
        provideStore({ users: usersReducer, notifications: notificationReducer }),
        instrumentStore({
            monitor: useLogMonitor({
                visible: true,
                position: 'right'
            })
        })
        //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        //provide(ExceptionHandler, {useClass: CustomExceptionHandler})
    ]);
