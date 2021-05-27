import { Discount, NoDiscount, FiftyPercentDiscount } from './Discount';

const createSut = (className: new () => Discount) => {
  return new className();
};

describe('Messaging', () => {
  it('should have no Discount on price', () => {
    // SUT -> System Under Test
    const sutDiscount = createSut(NoDiscount);

    const price = 77.99;

    expect(sutDiscount.calculate(price)).toBeCloseTo(price);
  });

  it('should apply Fifty Percent Discount on price', () => {
    // SUT -> System Under Test
    const sutDiscount = createSut(FiftyPercentDiscount);

    const price = 100;

    expect(sutDiscount.calculate(price)).toBeCloseTo(price / 2);
  });
});
