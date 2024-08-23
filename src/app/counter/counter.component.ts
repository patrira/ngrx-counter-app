
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../counter/state/app.reducer';
import * as CounterActions from '../counter/state/counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    
    this.count$ = this.store.select(state => state.counter.count);
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

  decrementBy(value: number) {
    this.store.dispatch(CounterActions.decrementBy({ value }));
  }

  undo() {
    this.store.dispatch(CounterActions.undo());
  }
}
