import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { decrease, increase, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>

  constructor(private store : Store<{count: number}>){
    // connect this.count$ stream to the current store `count` state
    this.count$ = store.select('count');
  }

  increment() {
    // dispatch increment action
    this.store.dispatch(increase());
  }

  decrement() {
    // dispatch decrement action
    this.store.dispatch(decrease());
  }

  reset() {
    // dispatch reset action
    this.store.dispatch(reset());
  }
}
