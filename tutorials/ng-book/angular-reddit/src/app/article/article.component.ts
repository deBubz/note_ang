import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('atr.class') cssClass = 'row';

  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Ang';
    this.link = 'badLink';
    this.votes = 10;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

  ngOnInit() {}

}
