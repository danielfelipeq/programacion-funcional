export const bmwSum = (allPrice) => {
  const bmw = allPrice.filter((item) => item.brand === "BMW");
  console.log(bmw);
  return bmw.reduce((x, y) => {
    return x + y.price;
  }, 0);
};
