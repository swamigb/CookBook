import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import * as RecipeActions from '../recipes/store/recipes.actions';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {

constructor(private recipeService: RecipeService, private dataStoreService: DataStorageService,
            private store: Store<fromApp.AppState>,
            private actions$: Actions) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  // console.log("resolver");
  // const recipes = this.recipeService.getRecipes();
  // if (recipes.length === 0)
  // {
   // console.log("resolver 2");
  //  return this.dataStoreService.fetchRecipes();
  return this.store.select('recipes').pipe(
    take(1),
    map(recipesState => recipesState.recipes),
    switchMap(recipes => {
      if (recipes.length === 0){
        this.store.dispatch(new RecipeActions.FetchRecipes());
        return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
      } else {
      return of(recipes);
      }
    })
  );

  // }
  // return recipes;
}

}
