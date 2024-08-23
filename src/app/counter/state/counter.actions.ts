import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const incrementBy = createAction('[Counter] Increment By', props<{ value: number }>());
export const decrementBy = createAction('[Counter] Decrement By', props<{ value: number }>());
export const setTo = createAction('[Counter] Set To', props<{ value: number }>());
export const multiplyBy = createAction('[Counter] Multiply By', props<{ value: number }>());
export const undo = createAction('[Counter] Undo');
