import { Action, State, createReducer, on } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// Section 1
const initTute: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

const initState: { tutorials: Tutorial[] } = {
  tutorials: [initTute],
}

const tutReducer = createReducer(
  initTute,
  on(TutorialActions.add, ``   () => {
    state
  }),
)

// export function red(state: State<{ tutorials: Tutorial[] }>, action: Action) {
//   return tutReducer(state, action)
// }

// Section 2
// export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

//     // Section 3
//     switch(action.type) {
//         case TutorialActions.ADD_TUTE:
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }


export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTE:
            return [...state, action.payload];

        // Add this case:
        case TutorialActions.REM_TUTE:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}
