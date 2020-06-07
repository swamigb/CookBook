import { Ingredient } from './../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedItemIndex: number;
}

const initialState: State = {
ingredients: [ new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
],
editedIngredient: null,
editedItemIndex: -1
};

export function ShoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.payload]};
        case ShoppingListActions.ADD_INGREDIENTS:
            return {...state, ingredients: [...state.ingredients, ...action.payload]};
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.editedIngredient;
            const newIngredient = {
                ...ingredient,
                ...action.payload
            };
            const updateIngredients = [...state.ingredients];
            updateIngredients[state.editedItemIndex] = newIngredient;
            return {...state,
                ingredients: updateIngredients
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {...state, ingredients: state.ingredients.filter((ig, igIndex) => {
                return igIndex !== state.editedItemIndex;
            })};
        case ShoppingListActions.START_EDITING:
            return {
                ...state,
                editedIngredient: {...state.ingredients[action.payload]},
                editedItemIndex: action.payload
            };
        case ShoppingListActions.STOP_EDITING:
            return {
                ...state,
                editedItem: null,
                editedItemIndex: -1
            };
        default:
            return state;
    }
}
