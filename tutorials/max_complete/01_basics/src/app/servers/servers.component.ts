import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer: boolean = false;

  toggleAllowNewServer(): void {
    this.allowNewServer = !this.allowNewServer;
    console.log('off', this.allowNewServer)
  }

  constructor() {
    console.log('on', this.allowNewServer);
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
      console.log('off', this.allowNewServer)
    }, 1000)
  }

  ngOnInit() {}
}
