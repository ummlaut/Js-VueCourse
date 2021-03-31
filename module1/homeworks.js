//1.1
const pi = Number(Math.PI.toFixed(2));
console.log(pi);

//1.2
const minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(minNum, maxNum);

//1.3
const random = Number(Math.random().toFixed(2));
const X = 100;
const randomX = Math.round(Math.random() * X);
console.log(random, randomX);

//1.4
const fixNum = Number(0.6 + 0.7).toFixed(1);
console.log(fixNum);

//1.5
const numFromStr = parseFloat("100$");
console.log(numFromStr);

//2

let string = "some test string";

//2.1

const firstLetter= string[0];
const lastLetter = string[string.length-1];
console.log(firstLetter, lastLetter);

//2.2

const firstLetterUp = firstLetter.toUpperCase();
const lastLetterUp = lastLetter.toUpperCase();
console.log(firstLetterUp, lastLetterUp);

//2.3

const stringIndex = string.indexOf('string');
console.log(stringIndex);

//2.4

const spaceIndex = string.indexOf(' ', 6);
console.log(spaceIndex);

//2.5
const newSlice = string.slice(5, -7);
console.log(newSlice);

//2.6
const testSlice = string.slice(5, 9);
console.log(testSlice);

//2.7
const newString = string.slice(0, -6);
console.log(newString);

//2.8
const a=20, b=16;
const concatString = a.toString().concat("", b);
console.log(concatString);