// 1
const NumArr = [1, 2, 3, 5, 8, 9, 10];
const convertedArr = NumArr.map((num) => ({
  value: num,
  odd: Boolean(num % 2),
}));

console.log(convertedArr);

// 2
numArr2 = [12, 4, 50, 1, 0, 18, 40];
const isNum = numArr2.some((num) => num === 0);
console.log(isNum);

// 3
const stringArr = ["yes", "hello", "no", "easycode", "what"];
const isLengthMoreThanThree = stringArr.every((str) => str.length > 3);
console.log(isLengthMoreThanThree);

//4
const objArr = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },

  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },

  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

const sortedObjArr = objArr.sort((prev, next) => prev.index - next.index);

const sortedString = sortedObjArr.reduce((acc, item) => {
  acc += item.char;
  return acc;
}, "");

console.log(sortedString);

//5

const minArr = [[14, 45], [1], ["a", "c", "d"]];

minArr.sort((prev, next) => prev.length - next.length);

console.log(minArr);

//6
