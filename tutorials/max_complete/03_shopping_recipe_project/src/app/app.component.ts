import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03_shopping_recipe_project';

  componentView: string = 'recipe';

  activeView: { recipe: boolean, shopping: boolean} = {
    recipe: true,
    shopping: false
  }

  onViewSelected(view: string) {
    this.componentView = view;
  }

}
