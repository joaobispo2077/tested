export abstract class Discount {
  protected discount = 0;

  calculate(amount: number): number {
    return amount - amount * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class NoDiscount extends Discount {}
