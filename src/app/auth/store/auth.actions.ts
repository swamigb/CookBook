import { User } from './../authentication/user.model';
import { Action } from '@ngrx/store';


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTHNETNTICATE = '[Auth] Authentication';
export const AUTHENTICATION_FAIL = '[Auth] Authentication fail';
export const SIGNUP_START = '[Auth] Sign up start';
export const AUTO_LOGIN = '[Auth] Auto Login';

export class Login implements Action {
    readonly type = LOGIN;
    constructor( public payload: User){}
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class Authenticate implements Action {
    readonly type = AUTHNETNTICATE;

    constructor(public payload: {email: string;
         password: string}){}
}

export class AuthenticationFail implements Action {
    readonly type = AUTHENTICATION_FAIL;
    constructor(public payload: string) {}
}

export class SignupStart implements Action {
    readonly type = SIGNUP_START;
    constructor(public payload: {email: string;
        password: string}) {}
}

export class AutoLogin implements Action {
    readonly type = AUTO_LOGIN;
}


export type Auth = Login | Logout | Authenticate | AuthenticationFail;
