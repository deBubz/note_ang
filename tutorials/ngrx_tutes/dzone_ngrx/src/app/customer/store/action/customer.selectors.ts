import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as customerReducers from './customer.reducer';

export const selectCustomerState = createFeatureSelector<customerReducers.CustomerState>(
  customerReducers.customerFeatureKey,
)

export const selectCustomer = createSelector(
  selectCustomerState,
  (state: customerReducers.CustomerState) => state.customers
)


