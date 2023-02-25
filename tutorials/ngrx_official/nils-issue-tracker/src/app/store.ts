import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
  props
} from '@ngrx/store';

export interface State {
  count: number;
}

/* action */
export const increment = createAction("[counter] increment");
export const multiply = createAction("[counter] multiply", props<{ factor: number}>());

/* reducer */
export const countReducer = createReducer(
  0,
  on(increment, state => state+1),
  on(multiply, (state, payload) => state*payload.factor)
);

/* action-reducer map */
export const reducers: ActionReducerMap<State> = {
  count: countReducer
}


