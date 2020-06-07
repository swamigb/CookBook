import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthFirebaseService } from './../auth/auth-firebase.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  @Output() SelectedFeature = new EventEmitter<string>();
  isAuthenticated = false;
  authSub = new Subscription();
  userEmail = null;

  onSelectMenu(Feature: string) {
      this.SelectedFeature.emit(Feature);
  }
  constructor(private storageService: DataStorageService,
              private fireAuthService: AuthFirebaseService,
              private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    /*this.authSub = this.fireAuthService.userSub.subscribe( user => {
      this.isAuthenticated = !!user;
      if (user){
      this.userEmail = user.email;
      }
    });*/
      this.store.select('auth').pipe( map(authData => authData.user), map(user => {
        // console.log(user);
        this.isAuthenticated = !!user;
        if (user){
      this.userEmail = user.email;
      }
    })).subscribe();
  }

  onSaveData() {
   // this.storageService.storeRecipes();
   this.store.dispatch(new RecipeActions.StoreRecipes());

  }

  onFetchData() {
    // this.storageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());

    // this.fireAuthService.logout();
    // this.router.navigate(['/login']);
  }
  ngOnDestroy() {
    // this.authSub.unsubscribe();
  }

}
