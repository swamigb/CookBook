import * as fromAppStore from '../../store/app.reducer';
import { NgForm } from '@angular/forms';

import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output, OnDestroy } from '@angular/core';
import { ShoppinglistService } from '../shoppinglist.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @Output() ingredientAdded =  new EventEmitter<Ingredient>();
  // @ViewChild('inputName', { static: true }) inputNameRef: ElementRef;
  // @ViewChild('inputAmount', { static: true }) inputAmountRef: ElementRef;
  // editedItemIndex: number;
  editMode = false;
  editedIngredient: Ingredient;
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscriptionSln: Subscription;

  constructor(private slService: ShoppinglistService,
              private store: Store<fromAppStore.AppState>) { }
  onAddItem(form: NgForm) {

    const newIngredient = new Ingredient(form.value.name, form.value.amount);
   // const index = this.editedItemIndex;
    if (this.editMode)
    {
     // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
     this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));
    } else{
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
     // this.slService.addNewIngredient(newIngredient);
    }
    this.onClear();
    // this.slForm.reset();
    // this.editMode = false;
    // this.ingredientAdded.emit(newIngredient);
  }

  ngOnInit(): void {
    this.subscriptionSln = this.store.select('shoppingList').subscribe(
      stateData => {
        if (stateData.editedItemIndex > -1){
        //  console.log(stateData);
          this.editMode = true;
          // this.editedItemIndex = stateData.editedItemIndex;
          this.editedIngredient = stateData.editedIngredient;
          this.slForm.setValue({
              name: this.editedIngredient.name,
              amount: this.editedIngredient.amount
            });
        } else {
          this.editMode = false;
        }
      }
    );
    // this.subscriptionSln = this.slService.startedEditing.subscribe((index: number) => {
    //   this.editedItemIndex = index;
    //   this.editMode = true;
    //   // console.log('1');
    //   this.store.select('shoppingList').subscribe(
    //     stateData => {
    //      // console.log('2:'+this.editedItemIndex);
    //     //  console.log(stateData);
    //       this.editedIngredient = stateData.ingredients[this.editedItemIndex];
    //     //  console.log(this.editedIngredient);
    //      }
    //   );
    //   // this.editedIngredient = this.slService.getIngredient(index);
    //   // console.log('3');
    //   this.slForm.setValue({
    //     name: this.editedIngredient.name,
    //     amount: this.editedIngredient.amount
    //   });
    // });
    // console.log('edit sl');
  }
  onClear() {
    this.slForm.reset();
    this.store.dispatch(new ShoppingListActions.StopEditing());
    this.editMode = false;
    // this.editedItemIndex = null;
    }

  onDelete() {
    // this.slService.removeIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
   // console.log(this.editedItemIndex);
    this.onClear();
    // console.log(this.slService.getIngredientList);
  }
  ngOnDestroy() {
    this.subscriptionSln.unsubscribe();
  }


}
