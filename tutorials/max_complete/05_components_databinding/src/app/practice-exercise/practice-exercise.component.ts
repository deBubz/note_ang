import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-practice-exercise',
  templateUrl: './practice-exercise.component.html',
  styleUrls: ['./practice-exercise.component.css']
})
export class PracticeExerciseComponent implements OnInit {
  gameRunning: boolean;
  gameNumber: number = 0;

  ref:any;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log('Big pp');
    this.ref = setInterval(() => console.log("gameRunning", this.gameNumber++), 1000);
  }

  endGame() {
    console.log('Smol pp');
    clearInterval(this.ref);
  }
}
