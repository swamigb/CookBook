import * as ShoppingListActions from './../shopping-list/store/shopping-list.actions';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeService {
    selectedRecipe = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    constructor(private slServices: ShoppinglistService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) {
        this.addNewRecipe();
    }
    private addNewRecipe() {
        // this.recipes.push(new Recipe('Hyderabadi Biryani',
        //     'Biryani is a mixed rice dish',
        //     'https://c1.peakpx.com/wallpaper/453/388/928/food-chicken-rice-india-meat-meal-wallpaper-preview.jpg',
        //     [
        //         new Ingredient('Biryani Rice', 2),
        //         new Ingredient('Chicken', 3)
        //     ]));
        // this.recipes.push(new Recipe('Dosa',
        //     'A dosa is a cooked flat thin layered rice batter',
        //     'https://akm-img-a-in.tosshub.com/sites/dailyo/story/embed/201812/masala-dosa_122818053242.jpg',
        //     [
        //         new Ingredient('Rice', 1),
        //         new Ingredient('Urud dal', 2),
        //         new Ingredient('Oil', 1)
        //     ]));
        // this.recipes.push(new Recipe('Idly',
        //     'A type of savoury rice cake',
        //     'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_960_720.jpg',
        //     [
        //         new Ingredient('Rice', 2),
        //         new Ingredient('Urud dal', 3)
        //     ]));
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }
    addToShoppinglist(ingredients: Ingredient[]) {
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
      //  this.slServices.addNewIngredients(ingredients);
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
