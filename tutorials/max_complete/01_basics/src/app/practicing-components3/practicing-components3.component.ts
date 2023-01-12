import { Component } from '@angular/core';

@Component({
  selector: 'app-practicing-components3',
  templateUrl: './practicing-components3.component.html',
  styleUrls: ['./practicing-components3.component.css']
})
export class PracticingComponents3Component {
  displayFlag: boolean = false;
  log: Array<string> = []

  onDisplayClick(): void {
    this.displayFlag = !this.displayFlag;
    this.log.push(Date.now().toString());
  }

  getColor(i): string | void {
    if(i > 4) {
      return 'blue';
    }
  }
}
