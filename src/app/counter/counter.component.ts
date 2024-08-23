
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from './state/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$ ;
  
  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  incrementBy(value: number) {
    this.store.dispatch(CounterActions.incrementBy({ value }));
  }
}
