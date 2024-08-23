import { Action, ActionReducer } from '@ngrx/store';
import { CounterActionsUnion } from './counter.actions';  
import * as CounterActions from './counter.actions';

export const initialState = 0;

export const counterReducer: ActionReducer<number, CounterActionsUnion> = (
  state = initialState,
  action: CounterActionsUnion 
): number => {
  switch (action.type) {
    case '[Counter] Increment':
      return state + 1;
    case '[Counter] Decrement':
      return state - 1;
    case '[Counter] Reset':
      return initialState;
    case '[Counter] Increment By':
      return state + action.value;
    case '[Counter] Set To':
      return action.value;
    case '[Counter] Multiply By':
      return state * action.value;
    default:
      return state;
  }
};
