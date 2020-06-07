import * as fromAppStore from '../store/app.reducer';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  Ingredients: Observable<{ingredients: Ingredient[]}>;
 // private igSubscription: Subscription;

  constructor(private slService: ShoppinglistService,
              private store: Store<fromAppStore.AppState>) {
    // this.addNewIngredient();
   // S console.log(this.slService.getIngredientList());
  }

  ngOnInit(): void {
    this.Ingredients = this.store.select('shoppingList');
  //  this.Ingredients = this.slService.getIngredientList();
  //  this.igSubscription = this.slService.ingredientsChanged
  //   .subscribe(
  //     (ingredients: Ingredient[]) => {
  //       this.Ingredients = ingredients;
  //     }
  //   );
    // console.log(this.Ingredients);
  }
  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEditing(index));
  }
  ngOnDestroy() {
  //  this.igSubscription.unsubscribe();
  }

}
