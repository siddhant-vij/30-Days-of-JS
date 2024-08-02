// LC 7: Reverse Integer

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const isNegative = x < 0;
  if (x < 0) {
    x = -x;
  }

  let reverseNum = 0;
  while (x > 0) {
    if (
      reverseNum > (Math.pow(2, 31) - 1) / 10 ||
      reverseNum < Math.pow(-2, 31) / 10
    ) {
      return 0;
    }
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return isNegative ? -reverseNum : reverseNum;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

console.log(reverse(Math.pow(2, 31) - 1));
console.log(reverse(Math.pow(-2, 31)));
