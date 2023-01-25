import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd1',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent1 implements OnInit {
  @Input() num: number;

  constructor() { }

  ngOnInit(): void {
  }

}
