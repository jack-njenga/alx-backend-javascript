import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get newAmount() {
    return this._amount;
  }

  set newAmount(amt) {
    if (typeof amt === 'number') {
      this._amount = amt;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  displayFullPrice() {
    const { crcy, code } = this._currency;
    return `${this._amount} ${crcy} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
