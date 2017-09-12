import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'http://netnebraska.org/sites/default/files/styles/basic-page-feature-image-standalone/public/page/recipebox_featureimage.jpg?itok=7tWbC8_I'),
    new Recipe('Another test Recipe', 'This is simply a test', 'http://netnebraska.org/sites/default/files/styles/basic-page-feature-image-standalone/public/page/recipebox_featureimage.jpg?itok=7tWbC8_I'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
