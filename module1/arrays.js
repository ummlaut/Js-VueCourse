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
const processors = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },

  { cpu: "intel", info: { cores: 4, сache: 4 } },

  { cpu: "amd", info: { cores: 1, сache: 1 } },

  { cpu: "intel", info: { cores: 3, сache: 2 } },

  { cpu: "amd", info: { cores: 4, сache: 2 } },
];

processors.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(processors);

//7
let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },

  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },

  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },

  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];

function filterCollection(product, min, max) {
  return product
    .filter(({ price }) => price >= min && price <= max)
    .sort((prev, next) => prev.price - next.price);
}

filterCollection(products, 10, 20);
