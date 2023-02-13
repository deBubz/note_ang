import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../model/customer'

export const addCustomer = createAction(
  '[Customer] Add Customers',
  (cust: Customer) => ({ cust })
);

/* It doesnt explain what the 2nd params in createAction is  */




