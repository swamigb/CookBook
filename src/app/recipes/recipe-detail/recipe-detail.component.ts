import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipes.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

 recipe: Recipe;
 id: number;
 toggle = false;
 recipeSub: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
              private store: Store<fromApp.AppState>) { }
  ngOnDestroy() {
    if (this.recipeSub) {
      this.recipeSub.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.route.params.pipe(
      map( (params: Params) => {
       return  params.id;
      } ),
      switchMap( id => {
        this.id = +id;
        return this.store.select('recipes');
      }),
      map( recipesState => {
        return recipesState.recipes.find( (recipe, index) => {
          return index === this.id;
        });
      })
    ).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params.id;
    //     this.recipe = this.recipeService.getRecipe(this.id);
    //   }
    // );
  }
  addToShoppinglist() {
    this.recipeService.addToShoppinglist(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
