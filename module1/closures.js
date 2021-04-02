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
function multiplyMaker (n){
  const multiplyRes = function(x){
    return n*=x;
  };
  return multiplyRes;
}

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)

multiply(1); // 4 (4 * 1)

multiply(3); // 12 (4 * 3)

multiply(10); // 120 (12 * 10)

//3