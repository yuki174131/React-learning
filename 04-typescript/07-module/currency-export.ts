const rate: { [unit: string]: number } = {
  USD: 1,
  EUR: 0.9,
  JPY: 108,
  GBP: 0.8,
};

type Unit = keyof typeof rate;
interface Currency {
  unit: Unit;
  amount: number;
}

const Currency = {
  exchange: (currency: Currency, unit: Unit): Currency => {
    const amount = (currency.amount / rate[currency.unit]) * rate[unit];

    return { unit, amount };
  },
};

// Currencyはリテラル型とオブジェクトともエクスポートされる。
// Currency をインポートすると、型と変数の別々のコンテキストで使える
export { Currency };
