import { Component } from '@angular/core';
import { products } from '../../assets/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productsList = products;

  share = (p: string) => {
    window.alert(`${p} has been shared!`);
  };

  onNotify = (p: string) => {
    window.alert(`Notify notify if price is under ${p}`);
  };
}
