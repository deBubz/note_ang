import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even1',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent1 implements OnInit {
  @Input() num: number;

  constructor() { }

  ngOnInit(): void {
  }

}
