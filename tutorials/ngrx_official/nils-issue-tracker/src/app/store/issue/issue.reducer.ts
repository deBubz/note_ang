import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';

import { IssueState, initialState } from './issue.state';
import * as IssueActions from './issue.actions';
import { Issue } from 'src/app/models/issue';

///
const rIssueSubmit = (state: IssueState, issue: Issue) =>
  produce(state, (draftState) => {
    draftState.entities[issue.id] = {
      ...issue,
      resolved: false,
    }
  });

export const issueReducer = createReducer(
  initialState,
  on(IssueActions.submitAction, rIssueSubmit)
)
