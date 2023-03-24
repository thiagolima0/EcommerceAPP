export const numberToUSD = (num: number) => {
  if (typeof num === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parseInt(num, 10));
  }

  return 0;
};
