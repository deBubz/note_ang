import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

// class NavObject {
//   constructor()
// }

export class HeaderComponent {
  @Output() viewSelected = new EventEmitter<string>()

  constructor() {}

  onSelect(view: string) : void {
    this.viewSelected.emit(view);
  }
}
