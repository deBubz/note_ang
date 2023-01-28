import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() onSelectRecipe = new EventEmitter<void>();

  selectRecipe() {
    this.onSelectRecipe.emit();
  }
}
