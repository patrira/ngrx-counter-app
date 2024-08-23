
import { createAction, props } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const addToHistory = createAction(
  '[Counter] Add to History',
  props<{ currentState: CounterState }>()
);

export const undo = createAction('[Counter] Undo');
