import { IOrderRepositories } from '../classes/interfaces/orderRepositories';

export class OrderRepositories implements IOrderRepositories {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso....');
  }
}
