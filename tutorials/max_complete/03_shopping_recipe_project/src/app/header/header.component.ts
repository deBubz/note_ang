import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

// class NavObject {
//   constructor()
// }

export class HeaderComponent {
  @Output() onNavChange = new EventEmitter<{recipe: boolean, shopping: boolean}>()

  constructor() {}

  navRecipe() {
    console.log("recipe")
    this.onNavChange.emit({
      recipe: true,
      shopping: false,
    })
  }

  navShopping() {
    console.log("Shop")
    this.onNavChange.emit({
      recipe: false,
      shopping: true,
    })

  }
}
