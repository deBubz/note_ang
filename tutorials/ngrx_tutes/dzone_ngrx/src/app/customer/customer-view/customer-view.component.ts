import { Component } from '@angular/core';
import { CustomerState } from '../store/action/customer.reducer';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Store, select } from '@ngrx/store';
import { selectCustomer } from '../store/action/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {
  customers$: Observable<Customer[]>;

  constructor(private store : Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomer))
  }
}

/* using the selector to get specified data from the store */
