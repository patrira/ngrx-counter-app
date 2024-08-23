// src/app/counter/state/counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  count: number;
  history: number[]; // To keep track of the history for undo
}

export const initialState: CounterState = {
  count: 0,
  history: []
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    history: [...state.history, state.count],
    count: state.count + 1
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    history: [...state.history, state.count],
    count: state.count - 1
  })),
  on(CounterActions.reset, (state) => ({
    ...state,
    history: [...state.history, state.count],
    count: 0
  })),
  on(CounterActions.incrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.count],
    count: state.count + value
  })),
  on(CounterActions.decrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.count],
    count: state.count - value
  })),
  on(CounterActions.setTo, (state, { value }) => ({
    ...state,
    history: [...state.history, state.count],
    count: value
  })),
  on(CounterActions.multiplyBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.count],
    count: state.count * value
  })),
  on(CounterActions.undo, (state) => {
    const previousState = state.history[state.history.length - 1];
    return {
      ...state,
      history: state.history.slice(0, -1),
      count: previousState !== undefined ? previousState : state.count
    };
  })
);
