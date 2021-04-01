// 1

function multiply(x) {
  res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;
}

// 2
function reverseString(str) {
  let res = "";
  for (let i = str.length; i--; ) {
    res += str[i];
  }
  console.log(res);
}

// 3
function unicodeString(arg) {
  let str = String(arg);
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str.charCodeAt(i) + " ";
  }
  res.trim();
  console.log(res);
  return res;
}

//4
function guessTheNumber(num) {
  if (typeof num === "string") {
    parseInt(num);
  }
  if (typeof num !== "number") {
    return new Error("Please provide a valid number");
  }
  if (num < 0 && num > 10) {
    return new Error("Please provide number in range 0 - 10");
  }
  let rnd = Math.floor(Math.random() * 10 + 1);
  return rnd === num
    ? "You win"
    : `You are lose, your number is ${num}, the random number is ${rnd} `;
}
