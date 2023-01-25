import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent implements OnInit {
  gameRunning: boolean = false;

  @Output() startGame = new EventEmitter();
  @Output() endGame = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStartClick() {
    this.startGame.emit();
  }

  onEndClick() {
    this.endGame.emit();
  }

}
