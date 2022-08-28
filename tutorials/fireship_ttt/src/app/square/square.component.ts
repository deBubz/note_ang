import { Component, OnInit } from '@angular/core';

// decorators starts with @ symbol
// allows passing in Objects
@Component({
  selector: 'app-square',
  template: ` <p>square works!</p> `,
  styles: [],
})
export class SquareComponent {
  // passing props using Input decorator
  // @Input() value: 'X' | 'O';
}
