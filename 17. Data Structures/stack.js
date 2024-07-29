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

  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const reverseString = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
};

console.log(reverseString("hello")); // olleh
console.log(reverseString("world")); // dlrow
