import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(title.value, link.value)

    return false;
  }
}
