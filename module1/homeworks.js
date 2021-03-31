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

const firstLetter = string[0];
const lastLetter = string[string.length - 1];
console.log(firstLetter, lastLetter);

//2.2

const firstLetterUp = firstLetter.toUpperCase();
const lastLetterUp = lastLetter.toUpperCase();
console.log(firstLetterUp, lastLetterUp);

//2.3

const stringIndex = string.indexOf('string');
console.log(stringIndex);

//2.4

const spaceIndex = string.indexOf(' ');
const spaceIndexTwo = string.indexOf(' ', spaceIndex+1)
console.log(spaceIndex);

//2.5
const newSlice = string.substr(5, 4);
console.log(newSlice);

//2.6
const testSlice = string.slice(5, 10);
console.log(testSlice);

//2.7
const newString = string.slice(0, -6);
console.log(newString);

//2.8
const a = 20, b = 16;
const concatString = a.toString().concat("", b);
console.log(concatString);

//3
//3.1
const item ={
  product: 'iphone'
}

//3.2
item.price = 1000;
item.currency = 'dollar';

//3.3 
item.details = {};
item.details = {
  model: 'XR',
  color: 'black'
};

console.log(item);

//4.

//4.1
/*
Чему равно а, почему?

let a = 0 || 'string';    Равно true, потому что 'string' не пустая, значит равно true.

let a = 1 && 'string';    Равно true, оба значения приводятся к true

let a = null || 25;    Равно true, потому что 25 приводится к true

let a = null && 25;    Равно false, потому что null приводится к false

let a = null || 0 || 35;   Равно true, 35 приводится к true

let a = null && 0 && 35;   Равно false, потому что хотя бы одно из значений равно false (здесь два)
*/

//4.2
/*

Что отобразится в консоли. Почему?

12 + 14 + '12'  || '2612', потому что у сначала выполнится первый оператор плюса слева и сложит числа, а потом второй оператор преобразует число в строку и произведет конкатенацию строк.

3 + 2 - '1' || 4, потому что при попытке вычесть из числа строку, строка будет приводиться к численному виду, и станет единицей.

'3' + 2 - 1 || 31, сначала 2 приведется к строке, произойдет конкатенация, потом при вычитании 32 приведется к числу и вычтется единица.

true + 2 || 3, true приведется к единице

+'10' + 1 || 12. Унарный плюс сначала преобразует 10 в число и увеличит на единицу, потом произойдет сложение с единицей.

undefined + 2 || NaN, потому что undefined становится NaN после численного преобразования.

null + 5 || 5, null становится 0 после численного преобразования.

true + undefined || думаю, что trueundefined, потому что оба сначала приведутся к строке.
 */

 //4.3 
 let someX = "someX";
 if (someX == "hidden"){
   someX = "visible";
 } else someX="hidden";

 //4.4
 let someY = 8;
 if (someY === 0) {
   someY = 1;
 } else if (someY < 0){
   someY = "less then zero";
 } else someY *= 10;

 //4.5
 let car = { 
   name: 'Lexus', 
   age: 10, 
   create: 2008, 
   needRepair: false 
  }

  if (car.age > 5){
    console.log('Need Repair');
    car.needRepair = true;
  } else car.needRepair = false;

  //4.6
  let item = { 
    name: 'Intel core i7', 
    price: '100$', 
    discount: '15%' 
  }

  if (item.hasOwn)