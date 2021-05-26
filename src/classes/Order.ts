import { CustomerOrderProtocol } from './interfaces/customer';
import { IMessaging } from './interfaces/messaging';
import { IOrderRepositories } from './interfaces/orderRepositories';
import { OrderStatus } from './interfaces/orderStatus';
import { IShoppingCart } from './interfaces/shoppingCart';

export class Order {
  private _status: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: IShoppingCart,
    private readonly messaging: IMessaging,
    private readonly orderRepositories: IOrderRepositories,
    private readonly customer: CustomerOrderProtocol,
  ) {}

  get orderStatus(): OrderStatus {
    return this._status;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('O carrinho seta vazio.');
      return;
    }

    this._status = 'closed';
    this.messaging.send('Perdido recebido.');
    this.orderRepositories.saveOrder();
    this.shoppingCart.clear();
    console.log(
      `O cliente é ${this.customer.getName()} - ${this.customer.getIDN()}`,
    );
  }
}
