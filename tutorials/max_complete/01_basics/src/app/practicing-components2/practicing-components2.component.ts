import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-components2',
  templateUrl: './practicing-components2.component.html',
  styleUrls: ['./practicing-components2.component.css']
})
export class PracticingComponents2Component implements OnInit{
    username: string = "";
    validUsername: boolean = false;

    ngOnInit(): void {}

    onAddClick(): void {
      this.username = "";
      console.log(`username refreshed`);
    }

    onCheckInput(e : Event): void {
      this.validUsername = !!(<HTMLInputElement>e.target).value;
    }
}
