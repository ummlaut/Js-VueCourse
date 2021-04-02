// 1
const NumArr = [1, 2, 3, 5, 8, 9, 10];
const convertedArr = NumArr.map((num) => ({
  value: num,
  odd: Boolean(num % 2),
}));

console.log(convertedArr);
