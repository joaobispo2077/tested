import { Product } from './Product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Messaging', () => {
  it('should construct a product', () => {
    // SUT -> System Under Test
    const productName = 'Bolacha';
    const productPrice = 4.2;

    const sutProduct = createSut(productName, productPrice);

    expect(sutProduct).toHaveProperty('name', productName);
    expect(sutProduct).toHaveProperty('price', productPrice);
    expect(sutProduct.price).toBeCloseTo(productPrice);
  });
});
