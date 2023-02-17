
import { Injectable } from '@angular/core'
import { Action, createAction, props } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTE = "[TUT] Add"
export const REM_TUTE = "[TUT] Remove"

/*
  seems like old syntax
  TODO: lets also try update this to the new syntax
*/
export class AddTutorial implements Action {
  readonly type = ADD_TUTE;

  constructor(public payload: Tutorial) {
  }
}


export class RemoveTutorial implements Action {
  readonly type = REM_TUTE;

  // pass through index as payload
  // no need for constructor if not passing data
  constructor(public payload: number) {}
}

export const add = createAction(ADD_TUTE, (payload: Tutorial) => ({ payload }))
export const remove = createAction(REM_TUTE, props<{ index: number }>() )

export type Actions = AddTutorial | RemoveTutorial;
