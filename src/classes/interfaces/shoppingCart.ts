import { CartItem } from './cartItem';

export interface IShoppingCart {
  items: Readonly<CartItem[]>;
  totalItems: number;

  addItem(item: CartItem): void;

  removeItem(index: number): void;

  getTotalPrice(): number;

  getTotalPriceWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
