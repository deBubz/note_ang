import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service'
import { UserService } from './users.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
  providers: [CounterService, UserService]
})
export class PracticeComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  counter: number;

  constructor(private counterService : CounterService, private userService:UserService) {
    this.counterService.counterUpdated.subscribe(
      () => this.counter = counterService.counter
    )
  }

  ngOnInit(): void {
    this.counter = this.counterService.counter;
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
