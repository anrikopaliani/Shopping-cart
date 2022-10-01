const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const currencyFormatter = (number: number) => {
  return CURRENCY_FORMAT.format(number);
};
