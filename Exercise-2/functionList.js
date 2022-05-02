export const list = (arr) => {
  const newArr = [];
  arr.map((item) => {
    newArr.push(`This ${item.brand} from ${item.model} costs $${item.price}`);
  });
  return newArr;
};
