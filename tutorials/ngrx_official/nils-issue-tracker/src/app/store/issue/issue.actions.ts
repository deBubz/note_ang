import { createAction, props } from '@ngrx/store';
import { Issue } from 'src/app/models/issue';

export const submitAction = createAction(
  '[Issue] Submit',
  (issue: Issue) =>  ({ ...issue, id: Math.random().toString(36).substring(2,9) })
);

