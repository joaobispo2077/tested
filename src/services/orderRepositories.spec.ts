import { OrderRepositories } from './OrderRepositories';

describe('OrderRepositories', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sutOrderRepositories = new OrderRepositories();

    expect(sutOrderRepositories.saveOrder()).toBeUndefined();
  });

  it('should call log once', () => {
    const sutOrderRepositories = new OrderRepositories();
    const consoleSpy = jest.spyOn(console, 'log');

    sutOrderRepositories.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call log once with "Pedido salvo com sucesso...."', () => {
    const sutOrderRepositories = new OrderRepositories();
    const consoleSpy = jest.spyOn(console, 'log');

    sutOrderRepositories.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso....');
  });
});
