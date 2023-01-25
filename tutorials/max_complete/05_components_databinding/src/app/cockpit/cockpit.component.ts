import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ServerData } from '../shared/serverData.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName: string = '';
  newServerContent: string = '';

  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output() blueprintCreated = new EventEmitter<ServerData>();

  // using ViewChild
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(input) {
    const serverData: ServerData = {
      serverName: !!input.value ? this.newServerName : input.value,
      serverContent: this.serverContentInput.nativeElement.value
    }

    console.log(input.value)
    console.log(this.serverContentInput.nativeElement.value)
    this.serverCreated.emit({
      serverName: !!input.value ? this.newServerName : input.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(input) {
    this.blueprintCreated.emit({
      serverName : this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
