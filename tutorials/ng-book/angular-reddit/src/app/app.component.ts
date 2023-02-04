import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: Article[] = [
      new Article('Angular', 'http://angular.io', 4),
      new Article('github', 'http://github.com', 9)
    ]

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value));

    title.value = "";
    link.value = "";
    return false;
  }

  constructor() {
  }

  ngOnInit(): void {

  }
}
