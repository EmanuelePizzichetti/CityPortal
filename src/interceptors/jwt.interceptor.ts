import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isLogged = this._auth.getToken != null || undefined;
    const isUrl = request.url.startsWith(environment.url);
    if(isLogged && isUrl) {
      request = request.clone({
        setHeaders: { authorization: 'Bearer ' + localStorage.getItem('token')}
      })
    }
    return next.handle(request);
  }
}
