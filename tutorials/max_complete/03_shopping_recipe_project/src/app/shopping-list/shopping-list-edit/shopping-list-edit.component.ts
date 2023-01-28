import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('valueInput') valInputRef: ElementRef;

  @Output() newIngredients = new EventEmitter<Ingredient>();

  addIngredient() {
    this.newIngredients.emit(new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.valInputRef.nativeElement.value
    ))
  }
}
