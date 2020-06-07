import { Params } from '@angular/router';
import { exhaustMap, take, map } from 'rxjs/operators';
import { AuthFirebaseService } from './../auth-firebase.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private fireBaseAuthService: AuthFirebaseService, private store: Store<fromApp.AppState>) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        /*return this.fireBaseAuthService.userSub.pipe(take(1), exhaustMap( user => {
             if (!user) {
                return next.handle(req);
            } else {
                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth', user.token)
                }
                );

                return next.handle(modifiedReq);
            }
        }));*/
        return this.store.select('auth').pipe(take(1), map(authData => authData.user), exhaustMap( user => {
            if (!user) {
               return next.handle(req);
           } else {
               const modifiedReq = req.clone({
                   params: new HttpParams().set('auth', user.token)
               }
               );

               return next.handle(modifiedReq);
           }
       }));
       // return next.handle(req);

    }
}
