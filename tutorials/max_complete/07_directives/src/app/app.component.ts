import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '07_directives';
  oNumbers : number[] = [];
  dNumbers : number[] = [];
  onlyOdd = false;

  constructor() {
    for (let i = 0; i < 7; i++) {
      this.oNumbers.push(i+1);
    }

    this.dNumbers = [...this.oNumbers].filter(n => (n%2===0) === this.onlyOdd);
  }

  toggleOdd = function() {
    this.onlyOdd = !this.onlyOdd;
    this.dNumbers = [...this.oNumbers].filter(n => (n%2===0) === this.onlyOdd);
  }

}
