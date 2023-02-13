import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/action/customer.reducer';



@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerViewComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule { }
