class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const printJobs = (queue) => {
  var str = "";
  while (!queue.isEmpty()) {
    str += queue.dequeue() + " ";
  }
  return str;
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.printQueue()); // 1 2 3 4 5
console.log(printJobs(queue)); // 1 2 3 4 5
console.log(queue.isEmpty()); // true

console.log(queue.front()); // No elements in Queue
console.log(queue.rear()); // No elements in Queue
console.log(queue.dequeue()); // Underflow
