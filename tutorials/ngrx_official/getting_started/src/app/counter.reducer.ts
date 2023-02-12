
import { createReducer, on } from '@ngrx/store'
import { increase, decrease, reset } from './counter.actions'

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => state+1),
  on(decrease, (state) => state-1),
  on(reset, (state) => 0),
);
