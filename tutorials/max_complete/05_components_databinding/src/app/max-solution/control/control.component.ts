import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  // the timer
  interval;
  lastNumber: number = 0;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber +1);
      this.lastNumber++;
    }, 1000);

  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
