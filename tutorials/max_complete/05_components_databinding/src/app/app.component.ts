import { Component, ViewEncapsulation } from '@angular/core';
import { ServerData } from './shared/serverData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test', content: 'test server' }
  ];

  onServerAdded(serverData: ServerData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: ServerData) {
    this.serverElements.push({
    type: 'blueprint',
    name: serverData.serverName,
    content: serverData.serverContent
    });
  }
}
