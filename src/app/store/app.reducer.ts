import * as fromShoppingList from './../shopping-list/store/shopping-list.reducer';
import * as fromAuth from './../auth/store/auth.reducer';
import * as fromRecipes from './../recipes/store/recipes.reducer';

import {  ActionReducerMap } from '@ngrx/store';

export interface AppState {
 shoppingList: fromShoppingList.State;
 auth: fromAuth.State;
 recipes: fromRecipes.State;
}

export const appReducerMap: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.ShoppingListReducer,
    auth: fromAuth.AuthReducer,
    recipes: fromRecipes.recipesReducer
};
