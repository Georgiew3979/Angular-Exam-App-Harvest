import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  CanLoad,
  Router,
  Route
} from '@angular/router';

import { AuthenticationService } from '../authentication/auth.service';

@Injectable()
export class RoleGuard implements CanActivate, CanLoad {
  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsAdmin(state.url);
  }

  canLoad(route: Route): boolean {
    return this.checkIsAdmin(route.path);
  }
  

  checkIsAdmin(url : string) : boolean {
    
    if (this.authService.isUserAdmin()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}