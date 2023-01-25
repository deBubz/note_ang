import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-solution',
  templateUrl: './max-solution.component.html',
  styleUrls: ['./max-solution.component.css']
})
export class MaxSolutionComponent implements OnInit {
  oddNum: number[] = []
  evenNum: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalFired(e : number) {
    console.log(e);
    if(e%2===0) {
      this.evenNum.push(e);
    } else {
      this.oddNum.push(e);
    }
  }

}
