import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CounterService {
  counter = 0;

  counterUpdated = new EventEmitter();

  count() {
    this.counter++;
    this.counterUpdated.emit()
  }
}
