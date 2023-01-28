import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes : Recipe[] = [
  new Recipe("Food", "Food good", "https://www.rhyplabuilds.com.au/assets/full/G5064128.jpg?20230104161612"),
  new Recipe("Egg", "I need more cheese", "https://www.rhyplabuilds.com.au/assets/full/G5064128.jpg?20230104161612")
 ];

 @Output() recipeDetail = new EventEmitter<Recipe>();

 constructor() {}

 ngOnInit(): void {
 }

 onRecipeClicked(recipe : Recipe) {
  this.recipeDetail.emit(recipe);
 }
}
