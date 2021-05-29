import { Discount } from './Discount';
import { CartItem } from './interfaces/cartItem';
import { ShoppingCart } from './ShoppingCart';

const createSut = () => {
  const discountMock = createDiscountMock();

  const sutShoppingCart = new ShoppingCart(discountMock);

  return { sutShoppingCart, discountMock };
};

const createSutWithProducts = () => {
  const { sutShoppingCart, discountMock } = createSut();

  const firstCartItem = createCartItemMock('Batatinhas', 50);
  const secondCartItem = createCartItemMock('Bicicleta', 150);

  sutShoppingCart.addItem(firstCartItem);
  sutShoppingCart.addItem(secondCartItem);

  return { sutShoppingCart, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}

  return new DiscountMock();
};

const createCartItemMock = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sutShoppingCart } = createSut();

    expect(sutShoppingCart.isEmpty()).toBe(true);
  });

  it('should have two cart items', () => {
    const { sutShoppingCart } = createSutWithProducts();

    expect(sutShoppingCart.totalItems).toBe(2);
  });

  it('should test total and total with discount', () => {
    const { sutShoppingCart } = createSutWithProducts();

    expect(sutShoppingCart.getTotalPrice()).toBe(200);
    expect(sutShoppingCart.getTotalPriceWithDiscount()).toBe(200);
  });

  it('should add products and clear cart', () => {
    const { sutShoppingCart } = createSutWithProducts();

    expect(sutShoppingCart.totalItems).toBe(2);
    sutShoppingCart.clear();

    expect(sutShoppingCart.totalItems).toBe(0);
    expect(sutShoppingCart.isEmpty()).toBe(true);
  });

  it('should add products and remove once', () => {
    const { sutShoppingCart } = createSutWithProducts();

    expect(sutShoppingCart.totalItems).toBe(2);
    sutShoppingCart.removeItem(1);

    expect(sutShoppingCart.totalItems).toBe(1);
    sutShoppingCart.removeItem(0);

    expect(sutShoppingCart.isEmpty()).toBe(true);
  });
});
