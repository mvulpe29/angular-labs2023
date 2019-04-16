import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AUTH_SERVICE, IAuthService} from './auth/auth.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class CustomerGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthorization().pipe(map(auth => {
      if (auth.customerFeatureEnabled) {
        return true;
      }

      this.router.navigate(['/']);
      return false;
    }));
  }
}
