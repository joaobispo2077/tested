/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartItem } from './interfaces/cartItem';
import { CustomerOrderProtocol } from './interfaces/customer';
import { IMessaging } from './interfaces/messaging';
import { IOrderRepositories } from './interfaces/orderRepositories';
import { IShoppingCart } from './interfaces/shoppingCart';
import { Order } from './Order';

class ShoppingCartMock implements IShoppingCart {
  get items(): Readonly<CartItem[]> {
    return [];
  }

  get totalItems(): number {
    return 1;
  }

  addItem(item: CartItem): void {}

  removeItem(index: number): void {}

  getTotalPrice(): number {
    return 2;
  }

  getTotalPriceWithDiscount(): number {
    return 1;
  }

  isEmpty(): boolean {
    return false;
  }

  clear(): void {}
}

class MessagingMock implements IMessaging {
  send() {}
}

class OrderRepositoriesMock implements IOrderRepositories {
  saveOrder() {}
}

class CustomerMock implements CustomerOrderProtocol {
  getName() {
    return '';
  }
  getIDN() {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const orderRepositoriesMock = new OrderRepositoriesMock();
  const customerMock = new CustomerMock();

  const sutOrder = new Order(
    shoppingCartMock,
    messagingMock,
    orderRepositoriesMock,
    customerMock,
  );

  return {
    sutOrder,
    shoppingCartMock,
    messagingMock,
    orderRepositoriesMock,
    customerMock,
  };
};

describe('Order', () => {
  afterEach(() => jest.clearAllMocks());

  it('should not checkout if cart is empty', () => {
    const { sutOrder, shoppingCartMock } = createSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(true);

    sutOrder.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sutOrder.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sutOrder, shoppingCartMock } = createSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValue(false);

    sutOrder.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sutOrder.orderStatus).toBe('closed');
  });

  it('should send an email to customer', () => {
    const { sutOrder, messagingMock } = createSut();

    const messagingMockSpy = jest.spyOn(messagingMock, 'send');

    sutOrder.checkout();

    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sutOrder, orderRepositoriesMock } = createSut();

    const orderRepositoriesMockSpy = jest.spyOn(
      orderRepositoriesMock,
      'saveOrder',
    );

    sutOrder.checkout();

    expect(orderRepositoriesMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sutOrder, shoppingCartMock } = createSut();

    const shoppingCartMockMockSpy = jest.spyOn(shoppingCartMock, 'clear');

    sutOrder.checkout();

    expect(shoppingCartMockMockSpy).toHaveBeenCalledTimes(1);
  });
});
