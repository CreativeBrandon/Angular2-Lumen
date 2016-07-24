// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

// bootstraping components
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

// REDUX
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { usersReducer } from './store/reducers/users.reducer';
// Components
import {provide, ExceptionHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {CustomExceptionHandler, Logger} from './shared/index';

bootstrap(
    AppComponent,
    [
        HTTP_PROVIDERS,
        provideStore({ users: usersReducer }),
        instrumentStore({
            monitor: useLogMonitor({
                visible: true,
                position: 'right'
            })
        })
        //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        //provide(ExceptionHandler, {useClass: CustomExceptionHandler})
    ]);
