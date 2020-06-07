import { Router, ActivatedRoute } from '@angular/router';
import { Effect , Actions, ofType} from '@ngrx/effects';
import * as RecipesActions from '../store/recipes.actions';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipesEffects {
    constructor(private actions$: Actions, private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute,
                private store: Store<fromApp.AppState>) { // console.log('hi');
}
    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(RecipesActions.FETCH_RECIPES),
        switchMap(() => {
        //    console.log('hello');
            return this.http.get<Recipe[]>('https://recipe-book-d702b.firebaseio.com/recipes.json');
        }),
        map(recipes => {
            return recipes.map(recipe => {
              return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
         }),
         map( recipes => {
            // console.log(recipes);
             return new RecipesActions.SetRecipes(recipes);
         })
    );

    // @Effect()
    // deleteRecipe = this.actions$.pipe(
    //     ofType(RecipesActions.DELETE_RECIPE),
    //     tap(() => {
    //         this.router.navigate(['../'], {relativeTo: this.route});
    //     })
    // );

    @Effect({dispatch: false})
    storeRecipes = this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionsData, recipesState]) => {
            return this.http.put('https://recipe-book-d702b.firebaseio.com/recipes.json', recipesState.recipes);
        })
    );

}
