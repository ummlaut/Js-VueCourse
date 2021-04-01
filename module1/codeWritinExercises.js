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

//4
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
function guessTheNumber(num) {
  const number = Number(num);

  if (typeof number !== "number" || isNaN(number))
    return new Error("Please provide a valid number");
  if (number < 0 || number > 10)
    return new Error("Please provide number in range 0 - 10");

  const random = Math.ceil(Math.random() * 10);

  if (random === number) return "You win!";

  return `You are lose, your number is ${number}, the random number is ${random}`;
}
