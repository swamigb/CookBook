import { PlaceholderDirective } from './../../shared/placeholder.directive';
import { AlertComponent } from './../../shared/alert/alert/alert.component';
import { Router } from '@angular/router';
import { AuthFirebaseService, AuthResponseData } from './../auth-firebase.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  errorMsg = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  constructor(private authFirebaseService: AuthFirebaseService, private router: Router,
              private compConFactoryRef: ComponentFactoryResolver,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('auth').subscribe(authState => {
      this.errorMsg = authState.authError;
      // console.log(this.errorMsg);
      this.isLoading = authState.loading;
      // localStorage.setItem('userAuth', JSON.stringify(authState.user));
      // if(this.errorMsg) {
      //   this.s
      // }
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
   // console.log(authForm.value);
  // let authObs = new Observable<AuthResponseData>();
   const email = authForm.value.email;
   const passwd = authForm.value.passwd;
   this.isLoading = true;
   if (this.isLoginMode) {
   // authObs = this.authFirebaseService.login(email, passwd);
   this.store.dispatch(new AuthActions.Authenticate({email, password: passwd}));

   } else{
     // authObs = this.authFirebaseService.signup(email, passwd);
     this.store.dispatch(new AuthActions.SignupStart({email, password: passwd}));
   }
  //  authObs.subscribe(
  //   responseData => {
  //    //  console.log(responseData);
  //      this.isLoading = false;
  //      this.router.navigate(['/recipes']);
  //      this.errorMsg = null;
  //   }, errorData => {
  //   //  console.log(errorData);
  //     this.isLoading = false;
  //     this.errorMsg = errorData;
  //     // const alertComp = this.compConFactoryRef.resolveComponentFactory(AlertComponent);
      // const hostViewContainerRef = this.alertHost.viewContainerRef;
      // hostViewContainerRef.clear();
      // const alertInstance = hostViewContainerRef.createComponent(alertComp);
      // alertInstance.instance.message = this.errorMsg;
      // const alertSub = alertInstance.instance.alertDismissed.subscribe(() => {
      //   alertSub.unsubscribe();
      //   hostViewContainerRef.clear();
      // });

  //   }
  // );
   authForm.resetForm();
  }
  onClose() {
  //  console.log("hi");
    this.errorMsg = null;
  }

}
