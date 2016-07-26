import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeContainer } from './containers/home.container';
import { UsersContainer } from './containers/users.container';
import { AppComponent } from './app.component';

const routes: RouterConfig =[
    {path: '',          component: HomeContainer},
    {path: 'users',     component: UsersContainer}
]

export const appRouterProviders = [
    provideRouter(routes)
]
