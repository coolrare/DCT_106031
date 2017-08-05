import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {fallbackRoute} from './shared/fallback-route';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean>|Promise<boolean>|boolean {
    if (next.queryParams['key'] == '123') {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
