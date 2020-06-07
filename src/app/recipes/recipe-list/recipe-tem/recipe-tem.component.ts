import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import * as fromApp from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-tem',
  templateUrl: './recipe-tem.component.html',
  styleUrls: ['./recipe-tem.component.css']
})
export class RecipeTemComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line: no-input-rename
  @Input() recipe: Recipe;
  @Input() index: number;
  private recipeSub: Subscription;

  // @Output() SelectedRecipe = new EventEmitter<void>();

  // onSelectRecipeItem() {
  //  this.recipeService.selectedRecipe.next(this.recipe);
  // }

  constructor(private recipeService: RecipeService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  //  // this.recipe = this.recipeService.getRecipe(this.index);
  //  this.recipeSub = this.store.select('recipes').pipe(
  //     map( recipesState => {
  //       console.log(this.index);
  //       console.log(recipesState.recipes);
  //       return recipesState.recipes.find((recipe, index) => {
  //         return index === this.index;
  //       });
  //     })
  //   ).subscribe(recipe => {
  //     console.log(recipe);
  //     this.recipe = recipe;
  //   });
  }

  ngOnDestroy() {
    // // if (this.recipeSub){
    // //   console.log('destroyed');
    // //   this.recipeSub.unsubscribe();
    // }
  }

}
