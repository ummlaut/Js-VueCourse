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

let a = 0 || 'string';    Равно 'string', потому что возвращает первое попавшееся true.

let a = 1 && 'string';    Равно 'string', потому что возвращает первое false или последнее true.

let a = null || 25;    Равно 25, потому что возвращает первое true

let a = null && 25;    Равно null, потому что возвращает первое false

let a = null || 0 || 35;   Равно 35, возвращает первое true

let a = null && 0 && 35;   Равно null, потому что  возвращает первое false
*/

//4.2
/*

Что отобразится в консоли. Почему?

12 + 14 + '12'  || '2612', потому что у сначала выполнится первый оператор плюса слева и сложит числа, а потом второй оператор преобразует число в строку и произведет конкатенацию строк.

3 + 2 - '1' || 4, потому что при попытке вычесть из числа строку, строка будет приводиться к численному виду, и станет единицей.

'3' + 2 - 1 || 31, сначала 2 приведется к строке, произойдет конкатенация, потом при вычитании 32 приведется к числу и вычтется единица.

true + 2 || 3, true приведется к единице

+'10' + 1 || 11. Унарный плюс превращает строку в число, потом произойдет сложение с единицей.

undefined + 2 || NaN, потому что undefined становится NaN после численного преобразования.

null + 5 || 5, null становится 0 после численного преобразования.

true + undefined || NaN, потому что при любых математических операциях с undefined кроме сложения со строкой, результат будет NaN.
 */

 //4.3 
 let someX = "hidden";
 if (someX === "hidden"){
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

 /* if (item.hasOwnProperty('discount') !== NaN && item.hasOwnProperty('price') !== NaN) {
    item.priceWithDiscount = parseInt(item.price) * (parseInt(item.discount) / 100);
  } else if (!item.hasOwnProperty('discount')){
    console.log(item.price);
  }*/

  const price = parseFloat(item.price);
  const discount = parseFloat(item.discount);
  if (!isNaN(price) && !isNaN(discount)) {
    const priceWithDiscount = price - (price * (discount / 100));
    console.log(priceWithDiscount)
  } else {
    console.log(price);
  }

  //4.7

  let product = {
    name: 'Яблоко',
    price: '10$'
  };

  let min = 10; 
  let max = 20; 

  if (max >= product.price && product.price >= min){
    console.log(item.name)
  } else console.log('Товаров не найдено');


  //5

  //5.1
  switch(a){
    case 'block': 
      console.log('block');
      break; 
    case 'none':
      console.log('none');
      break;
    case 'inline':
      console.log('inline');
      break;
    default: 
      console.log('other');
  }

  //5.2

  let someIf = 'hidden';
  someIf = someIf === 'hidden' ? 'visible' : 'hidden';

  //5.3
  let someElseIf = 0;
  someElseIf = someElseIf === 0 ? 1 : someElseIf < 0 ? 'less than zero' : someElseIf * 10;


// 6 
//6.1
const upperString = 'i am in the easycode';
const upperStringArr = upperString.split(' ');
for (let i=0; i< upperStringArr.length; i++){
  upperStringArr[i].charAt(0).toUpperCase();
}
console.log(upperStringArr);