// 1

function multiply(x) {
  if (!arguments.length) return 0;
  res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
}

// 2
function reverseString(str) {
  let string = String(str);
  let res = "";
  for (let i = str.length; i--; ) {
    res += str[i];
  }
  console.log(res);

  return res;
}

// 3
function unicodeString(arg) {
  let str = String(arg);
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i].charCodeAt() + " ";
  }

  return res.trim();
}

// 4
function guessTheNumber(num) {
  const number = Number(num);
  if (typeof number !== "number" || isNaN(number)) {
    return new Error("Please provide a valid number");
  }
  if (number < 0 && number > 10) {
    return new Error("Please provide number in range 0 - 10");
  }
  const rnd = Math.floor(Math.random() * 10 + 1);
  return rnd === num
    ? "You win"
    : `You are lose, your number is ${num}, the random number is ${rnd} `;
}

// 5

function getArray(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

//6
function doubleArray(arr) {
  if (Array.isArray(arr)) {
    return arr.concat(arr);
  } else return new Error("Please, provide an Array");
}

//7

function changeCollection(x) {
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      arguments[i].shift();
    } else return new Error("Please, provide an Array");
  }

  return arguments;
}

/* Prepod solution
function changeCollection() {
  const res = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const el = arguments[i].slice();
      el.shift();
      res.push(el)
    }
  }

  return res;
}
*/

//8

function filterUsers(arr, key, value) {
  if (!Array.isArray(arr))
    return new Error("The first argument should be an array");
  if (typeof key !== "string" || key === "")
    return new Error("The key should be a valid string");
  if (value === undefined || value === null)
    return new Error("The value should be a valid value.");

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].key === value) res.push(arr[i]);
  }
  return arr;
}
