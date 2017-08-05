import { Route } from '@angular/router';

export const fallbackRoute: Route = {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
};
