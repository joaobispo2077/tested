
import { Messaging } from './services/Messaging';
import { ShoppingCart } from './classes/ShoppingCart';
import { Order } from './classes/Order';
import { Product } from './classes/Product';
import { OrderRepositories } from './services/OrderRepositories';
import { FiftyPercentDiscount } from './classes/Discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/Customer';

const discount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const orderRepositories = new OrderRepositories();

const individualCustomer = new IndividualCustomer('João', 'Bispo', '21');
const enterpriseCustomer = new EnterpriseCustomer('batatinhas', '19');

const order = new Order(
  shoppingCart,
  messaging,
  orderRepositories,
  enterpriseCustomer,
);

const product = new Product('water bootle', 15);
const item = new Product('Playstation 5', 5000);

console.log(order.orderStatus);

shoppingCart.addItem(product);
shoppingCart.addItem(item);
shoppingCart.addItem(item);

console.log(shoppingCart.totalItems);
console.log(shoppingCart.items);

console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.getTotalPriceWithDiscount());
shoppingCart.removeItem(2);

console.log(shoppingCart.items);

order.checkout();

console.log(shoppingCart.items);
console.log(order.orderStatus);
