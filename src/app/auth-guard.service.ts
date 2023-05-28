import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './Services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      if (route.routeConfig.path === 'login' || route.routeConfig.path === 'register') {
        this.router.navigate(['/']);
        return false;
      }
      else {
        return true;
      }
    }
    else {
      if (route.routeConfig.path === 'cart' || route.routeConfig.path === 'user') {
        this.router.navigate(['/']);
        return false;
      }
      else {
        return true;
      }
    }
  }
  /*
  1-Logged in, tries to go to login/register, should return false and navigate to '/'
  2-Logged in, tries to go to user/cart, should return true
  3-Not logged in, tries to go to user/cart, should return false and navigate to '/'
  4-Not logged in, tries to go to login/register, should return true
  */
}
