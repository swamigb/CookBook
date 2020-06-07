import { AuthFirebaseService } from './../auth/auth-firebase.service';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipes.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

constructor(private http: HttpClient, private recipeService: RecipeService,
            private fireAuthService: AuthFirebaseService,
            private store: Store<fromApp.AppState>) { }

storeRecipes() {
  const recipes = this.recipeService.getRecipes();
  this.http.put('https://recipe-book-d702b.firebaseio.com/recipes.json', recipes).subscribe(responseData => {
    console.log(responseData);
  });
}
fetchRecipes() {

  return this.http.get<Recipe[]>('https://recipe-book-d702b.firebaseio.com/recipes.json').pipe(
    map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
     }),
     tap(recipes => {
      //   // console.log(recipes);
         // this.recipeService.setRecipes(recipes);
         // console.log(recipes);
         this.store.dispatch(new RecipesActions.SetRecipes(recipes));
       })
  );
  // return this.fireAuthService.userSub.pipe(take(1), exhaustMap(user => {
  //   return this.http.get<Recipe[]>('https://recipe-book-d702b.firebaseio.com/recipes.json', {
  //     params: new HttpParams().set('auth', user.token)
  //   });
  // }), map(recipes => {
  //   return recipes.map(recipe => {
  //     return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
  //   });
  // }), tap(recipes => {
  //   // console.log(recipes);
  //    this.recipeService.setRecipes(recipes);
  //  }));
  // return this.http.get<Recipe[]>('https://recipe-book-d702b.firebaseio.com/recipes.json').pipe().pipe();
}

}
