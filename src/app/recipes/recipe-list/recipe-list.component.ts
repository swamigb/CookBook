import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 // @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  recipesSubscription: Subscription;
  constructor(private recipeService: RecipeService, private store: Store<fromApp.AppState>) {
   // this.addNewRecipe();
   }
   /* onSelectedRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
   } */
   ngOnInit(): void {
   //  this.recipes = this.recipeService.getRecipes();
     this.recipesSubscription = this.store.select('recipes').pipe(
        map(recipesState => {
        // console.log(recipesState);
        // console.log(recipesState.recipes);

        return recipesState.recipes;
        }
          )
      ).subscribe((recipes: Recipe[]) => {
       // console.log(recipes);
        this.recipes = recipes;
       // console.log(this.recipes);
      });

    //  this.recipesSubscription = this.recipeService.recipesChanged.subscribe(
    //    (recipes: Recipe[]) => {
    //      this.recipes = recipes;
    //    }
    //  );
  }
  ngOnDestroy() {
    if (this.recipesSubscription) {
    this.recipesSubscription.unsubscribe();
    }
  }

}
