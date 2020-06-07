import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppinglistService {

//     ingredientsChanged = new Subject<Ingredient[]>();
//     private Ingredients: Ingredient[] = [];
//     startedEditing = new Subject<any>();

//     constructor() {
//         // this.Ingredients.push(new Ingredient('Apples', 5));
//         // this.Ingredients.push(new Ingredient('Tomatoes', 10));
//     }

//     getIngredientList() {
//         return this.Ingredients.slice();
//     }

//     getIngredient(index: number) {
//         return this.Ingredients[index];
//     }

//     addNewIngredient(ingredient: Ingredient) {
//         this.Ingredients.push(ingredient);
//         this.ingredientsChanged.next(this.Ingredients.slice());

//     }
//     addNewIngredients(ingredients: Ingredient[]) {
//        this.Ingredients.push(...ingredients);
//        this.ingredientsChanged.next(this.Ingredients.slice());

//    }

//    updateIngredient(index: number, newIngredient: Ingredient) {
//         this.Ingredients[index] = newIngredient;
//         this.ingredientsChanged.next(this.Ingredients.slice());
//    }

//    removeIngredient(index: number) {
//     this.Ingredients.splice(index, 1);
//     this.ingredientsChanged.next(this.Ingredients.slice());
//    }

}
