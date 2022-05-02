export const bmwSum = (allPrice) => {
  const bmw = allPrice.filter((item) => item.brand === "BMW");
  return bmw.reduce((x, y) => {
    return x + y.price;
  }, 0);
};
