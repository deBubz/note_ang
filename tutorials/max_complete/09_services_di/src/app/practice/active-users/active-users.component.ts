import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSetToInactive(id: number) {
    this.userService.setUserInactive(id);
  }
}
