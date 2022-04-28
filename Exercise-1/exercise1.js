const arr = [1, 2, 3, 4, 5, 6];

const arrMap = arr.map((item) => item * 2);

const filterArr = arr.filter((item) => item % 2 === 0);

const reduceArr = arr.reduce((x, y) => x + y);

console.log(arrMap);
console.log(filterArr);
console.log(reduceArr);
