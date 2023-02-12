import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSetToActive(id: number) {
    this.userService.setUserActive(id);
  }
}
