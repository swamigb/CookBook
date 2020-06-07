import { AuthFirebaseService } from './../auth-firebase.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private fireBaseAuthService: AuthFirebaseService, private router: Router, private store: Store<fromApp.AppState>){}
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
     boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {

       /*return this.fireBaseAuthService.userSub.pipe(
            take(1), map(
                user => {
                    const isAuthenticated = !!user;
                    if (isAuthenticated){
                      //  console.log(user);
                        return isAuthenticated;
                    }
                   //  console.log('3');
                    return this.router.createUrlTree(['/login']);
                }
            )
        );*/


        return this.store.select('auth').pipe(
            take(1), map(authData => authData.user), map(
                user => {
                    const isAuthenticated = !!user;
                    if (isAuthenticated){
                      //  console.log(user);
                        return isAuthenticated;
                    }
                   //  console.log('3');
                    return this.router.createUrlTree(['/login']);
                }
            )
        );
     //   return true;
    }
}
