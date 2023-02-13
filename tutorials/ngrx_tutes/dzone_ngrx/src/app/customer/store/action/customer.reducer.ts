import { Action, createReducer, on } from '@ngrx/store';
import { addCustomer as addCustomerAction } from './customer.actions';
import { Customer } from '../../../model/customer';


export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: []
};
/* weird type thing happening here */

export const customerReducer = createReducer(
  initialState,
  on(
    addCustomerAction,
    (state: CustomerState, {cust}) =>
      ({
        ...state,
        customers: [...state.customers, cust] // add new customer object to the collection
      })
  )
);

export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
/* function feels abit shit */
/* dont see the point in here at the moment, it might be to obfuscate calls */


