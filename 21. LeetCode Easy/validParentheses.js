// LC 20: Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

var isValid = function (s) {
  const stack = new Stack();
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
      if (stack.isEmpty()) {
        return false;
      } else if (stack.peek() != pairs[s[i]]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.isEmpty() ? true : false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
