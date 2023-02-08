import { Product } from './product.model.1'

describe('Product', () => {
	let prod;
	beforeEach(() => {
		prod = new Product(11);
	})

	describe('price', () => {
		it('is calculated based on base price and state', () => {
			expect(prod.totalPrice('Fl')).toBe(11.66);
		})
	})
})