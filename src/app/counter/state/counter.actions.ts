
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const incrementBy = createAction('[Counter] Increment By', props<{ value: number }>());
export const setTo = createAction('[Counter] Set To', props<{ value: number }>());
export const multiplyBy = createAction('[Counter] Multiply By', props<{ value: number }>());

export type CounterActionsUnion =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>
  | ReturnType<typeof incrementBy>
  | ReturnType<typeof setTo>
  | ReturnType<typeof multiplyBy>;
