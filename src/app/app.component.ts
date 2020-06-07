import { AuthFirebaseService } from './auth/auth-firebase.service';
import { element } from 'protractor';
import { isPlatformBrowser} from '@angular/common';
import { Component, EventEmitter, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe Book';
  // loadedFeature = 'recipe';

  // onNavigate(Feature: string) {
  //   console.log(Feature);
  //   this.loadedFeature = Feature;
  // }
  constructor(private fireBaseAuthService: AuthFirebaseService,
              private store: Store<fromAuth.AppState>,
              @Inject(PLATFORM_ID) private platformId) {}
  ngOnInit() {
    // this.fireBaseAuthService.autoLogin();
    if (isPlatformBrowser(this.platformId)){
    this.store.dispatch(new AuthActions.AutoLogin());
    }
  }

}
