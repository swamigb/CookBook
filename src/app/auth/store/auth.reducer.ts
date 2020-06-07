import { User } from './../authentication/user.model';
import * as AuthActions from './auth.actions';

export interface State {
    user: User;
    authError: string;
    loading: boolean;
}

export const initialState: State = {
   user: null,
   authError: null,
   loading: false
};

export function AuthReducer( state =  initialState, action: AuthActions.Auth){
    switch (action.type) {
        case AuthActions.LOGIN:
           // console.log('In Login');
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case AuthActions.LOGOUT:
            return {...state, user: null};
        case AuthActions.AUTHNETNTICATE:
          //  console.log('Authenticate');
            return {...state,
                authError: null,
                loading: true
            };
        case AuthActions.AUTHENTICATION_FAIL:
             return {...state,
                user: null,
                authError: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
