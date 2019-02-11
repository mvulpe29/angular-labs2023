import {Injectable, InjectionToken, Provider} from '@angular/core';
import {IAuthorization} from './auth.model';
import {AUTH} from './auth.data';
import {Observable} from "rxjs";

export interface IAuthService {
  getAuthorization(): Observable<IAuthorization>;
}

@Injectable()
export class AuthFileService implements IAuthService {
  getAuthorization(): Observable<IAuthorization> {
    return Observable.create(observer => {
      observer.next(AUTH);
      observer.complete();
    });
  }
}

export const AUTH_SERVICE: InjectionToken<IAuthService> = new InjectionToken('AUTH_SERVICE');

export const AuthServiceProvider: Provider = {
  provide: AUTH_SERVICE,
  useClass: AuthFileService
};
