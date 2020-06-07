import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import * as RecipeActions from '../../recipes/store/recipes.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id: number;
  allowEdit = false;
  // editMode  = false;
  recipeForm: FormGroup;
  recipeSub: Subscription;
  // controls: FormArray;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private store: Store<fromApp.AppState>) { }
  ngOnDestroy() {
    if (this.recipeSub) {
      console.log('destroyed');
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
        this.allowEdit = id != null;
        // console.log(this.id);
        return this.store.select('recipes');
      }),
      map( recipesState => {
        return recipesState.recipes.find( (recipe, index) => {
          return index === this.id;
        });
      })
    ).subscribe((recipe: Recipe) => {
      this.initForm(recipe);
    });

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params.id;
    //     this.allowEdit = params.id != null;
    //     this.initForm();
    //     console.log(this.recipeForm);
    //   }
    // );
  }

  initForm(recipe: Recipe) {
    let recipename = '';
    let imagepath = '';
    let description = '';
    const recipeIngredients = new FormArray([]);
    // console.log(recipe);
    if (this.allowEdit){
      // const recipe = this.recipeService.getRecipe(this.id);
      recipename = recipe.name;
      imagepath = recipe.imagePath;
      // console.log(imagepath);
      description = recipe.description;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      recipename: new FormControl(recipename, Validators.required),
      imagepath : new FormControl(imagepath, Validators.required),
      description : new FormControl(description, Validators.required),
      ingredients: recipeIngredients
    });
  }
  getControls() { // a getter!
    return ( this.recipeForm.get('ingredients') as FormArray).controls;
  }
  onAddIngredient() {
    ( this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }
  onSave() {
    const recipe: Recipe = {name: this.recipeForm.value.recipename,
    imagePath: this.recipeForm.value.imagepath,
  description: this.recipeForm.value.description,
ingredients: this.recipeForm.value.ingredients};
    if (this.allowEdit) {
      // console.log(this.recipeForm);
    // this.recipeService.updateRecipe(this.id, recipe);
    this.store.dispatch(new RecipeActions.UpdateRecipe({recipe, index: this.id}));
  } else{
   // this.recipeService.addRecipe(recipe);
   this.store.dispatch(new RecipeActions.AddRecipe(recipe));

  }
    this.onCancel();
}
onCancel() {
  this.router.navigate(['../'], {relativeTo: this.route});
}
onDeleteIngredient(index: number) {
  (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
}

}

