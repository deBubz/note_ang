import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages?: string[];

  constructor(
    public msgService: MessageService
  ) {}

  ngOnInit() {
    this.messages = this.msgService.messages;
  }
}
