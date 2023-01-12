import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server Created";
  serverName: string = '';


  toggleAllowNewServer(): void {
    this.allowNewServer = !this.allowNewServer;
    console.log('off', this.allowNewServer)
  }


  constructor() {
    console.log('on', this.allowNewServer);
    // this.runTimeout();

        setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
      console.log('off', this.allowNewServer)
    }, 1000)

  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = `Server was created!\nServer name is ${this.serverName}`;
    this.allowNewServer = false;
  }

  onUpdateServerName(e : Event) {
    // ts type casting
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
