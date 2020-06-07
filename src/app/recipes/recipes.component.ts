import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // recipeSelected: boolean;
  // recipe: Recipe;
  /*onSelectedRecipe(recipe: Recipe){
    this.recipeSelected = true;
    this.recipe = recipe;
  }*/
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.selectedRecipe
    // .subscribe(
    //   (recipe: Recipe) => {
    //     this.recipe = recipe;
    //   }
    // );
  }

}
