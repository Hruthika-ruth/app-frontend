import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('@reg-angular/auth').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@reg-angular/shared').then((m) => m.SharedModule),
  },
];

export const AppRoutes = APP_ROUTES;
