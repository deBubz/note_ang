import { createAction } from '@ngrx/store'

export const increase = createAction('[Counter] incr');
export const decrease = createAction('[Counter] dec');
export const reset = createAction('[Counter] rs');

// did not work because the action string was not unique
// they all get overlapped and overidden by the last reducer
