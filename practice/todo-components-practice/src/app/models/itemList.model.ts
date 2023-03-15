
// list class
import {Item} from "./item.model";

export class ItemList {
  itemList: Array<Item>
  private idCounter: number = 0;

  constructor() {
    this.itemList = [];
  }

  addItem(item: Item) {
    this.itemList.push(item)
  }

  removeItem(id: number): void {
    this.itemList.forEach((it, i) => {
      if(it.id === id) {
        this.itemList = this.itemList.slice(i, 1);
        return;
      }
    })
  }
}
