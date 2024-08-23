import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incrementBy, decrementBy, setTo, multiplyBy } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState),
  on(incrementBy, (state, { value }) => state + value),
  on(decrementBy, (state, { value }) => state - value),
  on(setTo, (state, { value }) => value),
  on(multiplyBy, (state, { value }) => state * value)
);
