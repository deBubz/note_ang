import { Component } from '@angular/core';
import {ItemList} from "../models/itemList.model";

@Component({
  selector: 'app-p1-simple-passing',
  templateUrl: './p1-simple-passing.component.html',
  styleUrls: ['./p1-simple-passing.component.css']
})
export class P1SimplePassingComponent {
  private p1ItemList: ItemList

  constructor() {
    this.p1ItemList = new ItemList();
  }

}
