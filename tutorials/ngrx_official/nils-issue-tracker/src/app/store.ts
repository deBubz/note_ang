export interface State {
  count: number;
}

/* Actions */
import { createAction } from '@ngrx/store';

export const increment = createAction("[counter] increment");

/* reducer */
import { on, createReducer } from '@ngrx/store'

const initialState: State = {
  count: 0
}

export const countReducer = createReducer(
  0,
  on(increment, state => state+1)
  // on(increment, (state) => ({
  //   ...state,
  //   count: state.count+1
  // }))
);

/* action-reducer map */
import { ActionReducerMap } from '@ngrx/store'

export const reducers: ActionReducerMap<State> = {
  count: countReducer
}


