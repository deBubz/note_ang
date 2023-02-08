import { Product } from './product.model.1'
import { MockPriceService } from './price.service.mock'

describe('Product', () => {
	let prod;
	beforeEach(() => {
		const service = new MockPriceService();
		// injecting the mock service into the product object in test
		prod = new Product(service, 11);
	})

	describe('price', () => {
		it('is calculated based on base price and state', () => {
			expect(prod.totalPrice('Fl')).toBe(11.66);
		})
	})
})