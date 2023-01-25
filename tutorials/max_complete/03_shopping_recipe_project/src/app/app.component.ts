import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03_shopping_recipe_project';

  activeView: { recipe: boolean, shopping: boolean} = {
    recipe: true,
    shopping: false
  }

  onNavEmitted(e: {recipe: boolean, shopping: boolean}) {
    this.activeView = e;
  }

}
