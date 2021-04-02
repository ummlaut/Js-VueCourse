// 1
function minusWrap(x) {
  const arg = x;
  return function minus(n) {
    const res = x - n;
    return res;
  };
}

const minusNum = minusWrap(10);
minusNum(6);

//
function multiplyMaker(n) {
  const multiplyRes = function (x) {
    return (n *= x);
  };
  return multiplyRes;
}

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10)

//3
function strTricks() {
  let newStr = "";
  return {
    installString(str = "") {
      newStr = String(str);
      return str;
    },
    getString() {
      return newStr;
    },
    getStringLength() {
      return newStr.length;
    },
    getReversedString() {
      return newStr.split("").reverse().join();
    },
  };
}

const newString = strTricks();
newString.getString("salkffm2o");

//4
const calculator = (function () {
  let num = 0;

  function setNum(val = 0) {
    num = Number(val);
    return this;
  }
  function plus(val) {
    num += Number(val);
    return this;
  }
  function minus(val) {
    num -= Number(val);
    return this;
  }
  function multiply(val) {
    num *= Number(val);
    return this;
  }
  function division(val) {
    num /= Number(val);
    return this;
  }
  function exponention(exp = 0) {
    num = Math.pow(num, exp);
    return this;
  }
  function getNum() {
    return Number(num.toFixed(2));
  }
  return {
    setNum,
    plus,
    minus,
    multiply,
    division,
    exponention,
    getNum,
  };
})();
console.log(calculator.setNum(3).exponention(3).getNum());
