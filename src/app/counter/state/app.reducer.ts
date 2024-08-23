
import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from './counter.reducer';
import { counterHistoryReducer, CounterHistoryState } from './counter-history.reducer';

export interface AppState {
  counter: CounterState;
  counterHistory: CounterHistoryState;
}

export const appReducer: ActionReducerMap<AppState> = {
  counter: counterReducer,
  counterHistory: counterHistoryReducer,
};
