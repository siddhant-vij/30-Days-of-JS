const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
};

const isPalindrome = (str) => {
  return str === reverseString(str);
};

console.log(reverseString("hello"));
console.log(isPalindrome("hello"))

console.log(reverseString("racecar"));
console.log(isPalindrome("racecar"));