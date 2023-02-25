import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'

import { increment, multiply, State } from '../../store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = this.store.select(state => state.count)
  }

  increment() {
    this.store.dispatch(increment());
  }

  multiply(f : string): void {
    this.store.dispatch(multiply({ factor: parseInt(f) }));
  }
}
