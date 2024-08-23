
import { createReducer, on } from '@ngrx/store';
import { addToHistory, undo } from './counter-history.actions';
import { CounterState } from './counter.reducer';

export interface CounterHistoryState {
  history: CounterState[];
}

const initialState: CounterHistoryState = {
  history: [],
};

export const counterHistoryReducer = createReducer(
  initialState,
  on(addToHistory, (state, { currentState }) => ({
    ...state,
    history: [...state.history, currentState],
  })),
  on(undo, (state) => {
    const newHistory = state.history.slice(0, -1);
    return {
      ...state,
      history: newHistory,
    };
  })
);
