import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(m: string) {
    this.messages.push(m);
  }

  clear() {
    this.messages = [];
  }
}
