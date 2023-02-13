import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/action/customer.reducer';
import { Customer } from 'src/app/model/customer';
import { addCustomer } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent {
  constructor(private store: Store<CustomerState>) {}

  addNewCustomer(name: string) {
    const customer = new Customer();
    customer.name = name;
    this.store.dispatch(addCustomer(customer));
  }
}
