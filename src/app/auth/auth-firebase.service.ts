import { Router } from '@angular/router';
import { User } from './authentication/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
// userSub: any;

constructor(private http: HttpClient, private router: Router, private store: Store<fromApp.AppState>) { }

// userSub = new BehaviorSubject<User>(null);
autoLogoutTimeout = null;

// signup(email: string, password: string) {
//   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
//   {
//     email,
//     password,
//     returnSecureToken: true
//   }).pipe(catchError(this.handleAuthError),  tap( respData => {
//     this.handleAuth(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
//   }));
// }

// autoLogin() {
//   const user: {
//     userId: string,
//     email: string,
//     _token: string,
//     _expiresIn: string
//   } = JSON.parse(localStorage.getItem('userAuth'));
//   if (!user)
//   {
//     return;
//   }
//   const loadedUser = new User(user.userId, user.email, user._token, new Date(user._expiresIn));
//   if (loadedUser.token){
//   // this.userSub.next(loadedUser);
//    this.store.dispatch(new AuthActions.Login(loadedUser));
//    this.autoLogout(new Date(user._expiresIn).getTime() - new Date().getTime());

//   } else{
//     return;
//   }

// }

// login(email: string, password: string ) {
//   return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
//   environment.firebaseAPIKey ,
//   {
//     email,
//     password,
//     returnSecureToken: true
//   }).pipe(catchError(this.handleAuthError), tap( respData => {
//    // console.log(respData.email);
//     this.handleAuth(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
//   }));
// }

// private handleAuthError(errorResponse: HttpErrorResponse) {
//   let errorMessage = 'An unknown error occured!';
//   if (!errorResponse.error || !errorResponse.error.error) {
//         return throwError(errorMessage);
//       }
//   switch (errorResponse.error.error.message){
//         case 'EMAIL_EXISTS': errorMessage = 'This email already exists!';
//                              break;
//         case 'EMAIL_NOT_FOUND': errorMessage = 'There is no user record corresponding to this email!';
//                                 break;
//         case 'INVALID_PASSWORD': errorMessage = 'The password is invalid!';
//                                  break;
//         case 'USER_DISABLED': errorMessage = 'The user account has been disabled by an administrator';
//                               break;

//       }
//   return throwError(errorMessage);
// }

// logout() {
//   // this.userSub.next(null);
//   this.store.dispatch(new AuthActions.Logout());
//   localStorage.removeItem('userAuth');
//  // console.log(this.autoLogoutTimeout);
//   if (this.autoLogoutTimeout) {
//    clearTimeout(this.autoLogoutTimeout);
//   }
//   this.autoLogoutTimeout = null;
//  // this.router.navigate(['\login']);
// }

autoLogout(expiresIn: number) {
  this.autoLogoutTimeout = setTimeout( () => {
    this.store.dispatch(new AuthActions.Logout());
  }, expiresIn);
}

clearAutoLogOutTimer() {
  if (this.autoLogoutTimeout) {
       clearTimeout(this.autoLogoutTimeout);
       }
  this.autoLogoutTimeout = null;
}

// private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
//   // console.log(email+' '+userId);
//   const expiresInDate = new Date(new Date().getTime() + +expiresIn * 1000);
//   const expiresInDateString = expiresInDate.toDateString();
//   const user: User = new User(userId, email, token, expiresInDate);
//  // this.userSub.next(user);
//   this.store.dispatch(new AuthActions.Login(user));
// //  console.log(user);
//   localStorage.setItem('userAuth', JSON.stringify(user));
//   this.autoLogout(expiresIn * 1000);
// }
}
