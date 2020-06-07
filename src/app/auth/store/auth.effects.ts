import { HttpClient } from '@angular/common/http';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from '../store/auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { AuthResponseData, AuthFirebaseService } from '../auth-firebase.service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../authentication/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private http: HttpClient, private router: Router,
                private fireBaseAuthService: AuthFirebaseService) {}
    @Effect()
    authSignup = this.actions$.pipe(
        ofType(AuthActions.SIGNUP_START),
        switchMap((signUpData: AuthActions.SignupStart) => {
            // console.log(environment.firebaseAPIKey);
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
            + environment.firebaseAPIKey,
             {
                email: signUpData.payload.email,
                password: signUpData.payload.password,
                returnSecureToken: true
             }).pipe(tap(respData => {
                 this.fireBaseAuthService.autoLogout(+respData.expiresIn * 1000);
             }),
             map(respData => {
                 return handleAuthntication(respData.localId, respData.expiresIn, respData.idToken, respData.email, true);
             }),
             catchError(errorResp => {
                 return handleError(errorResp);
             })
             );
        })
    );

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.AUTHNETNTICATE),
        switchMap((authData: AuthActions.Authenticate) => {
            // console.log(environment.firebaseAPIKey);
            return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
            + environment.firebaseAPIKey,
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true
            }).pipe(tap(respData => {
                this.fireBaseAuthService.autoLogout(+respData.expiresIn * 1000);
            }),
            map( respData => {
                return handleAuthntication(respData.localId, respData.expiresIn, respData.idToken, respData.email, true);
            }),
             catchError(errorResponse => {
                    return handleError(errorResponse);
            }));
        })
    );

    @Effect({dispatch: false})
    authRedirect = this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        tap((authSuccess: AuthActions.Login) => {
            if (authSuccess.payload.redirect) {
            this.router.navigate(['/']);
            }
        })
    );
    @Effect({dispatch: false})
    authLogout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
           this.fireBaseAuthService.clearAutoLogOutTimer();
           localStorage.removeItem('userAuth');
           this.router.navigate(['/login']);
        })
    );

    @Effect()
    autoLogin = this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map( () => {
            const user: {
                userId: string,
                email: string,
                _token: string,
                _expiresIn: string
              } = JSON.parse(localStorage.getItem('userAuth'));
            if (!user)
              {
                return {type: 'DUMMY'};
              }
            const loadedUser = new User(user.userId, user.email, user._token, new Date(user._expiresIn), false);
            if (loadedUser.token){
              return new AuthActions.Login(loadedUser);
              } else{
                return {type: 'DUMMY'};
              }
        }

        )
    );
}
const handleAuthntication = (userId: string, expiresIn: string, token: string, email: string, redirect: boolean) => {
    const expiresInDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const expiresInDateString = expiresInDate.toDateString();
    const user: User = new User(userId, email, token, expiresInDate, redirect);
    localStorage.setItem('userAuth', JSON.stringify(user));
    return new AuthActions.Login(user);
};

const handleError = (errorResponse: any) => {
    let errorMessage = 'An unknown error occured!';
    if (!errorResponse.error || !errorResponse.error.error) {
                    return of(new AuthActions.AuthenticationFail(errorMessage));
                    }
    switch (errorResponse.error.error.message){
                      case 'EMAIL_EXISTS': errorMessage = 'This email already exists!';
                                           break;
                      case 'EMAIL_NOT_FOUND': errorMessage = 'There is no user record corresponding to this email!';
                                              break;
                      case 'INVALID_PASSWORD': errorMessage = 'The password is invalid!';
                                               break;
                      case 'USER_DISABLED': errorMessage = 'The user account has been disabled by an administrator';
                                            break;
                    }
    return of(new AuthActions.AuthenticationFail(errorMessage));
};

