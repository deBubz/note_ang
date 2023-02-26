import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store'

import { RootState } from '../store/issue/store';
import * as IssueActions from '../store/issue/issue.actions';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent {
  form: FormGroup;

  constructor(private store: Store<RootState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priority: ["low", Validators.required],
    })
  }

  submit(): void {
    this.store.dispatch(IssueActions.submitAction(this.form.value));
  }
}
