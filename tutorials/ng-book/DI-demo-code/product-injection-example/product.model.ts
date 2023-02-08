import { IPriceService } from './price-service.interface'; 
// change to import the interface

export class Product {
  service: IPriceService; // change type to the interface
  basePrice: number;

  constructor(service: IPriceService, basePrice: number) {
    // previously a new PriceService object was passed
    this.service = service; // <-- passed in as an argument!
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
