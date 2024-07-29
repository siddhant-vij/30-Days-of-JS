class LLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const node = new LLNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  remove() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  display(head) {
    let current = head;
    const arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

const run = () => {
  const linkedList = new LinkedList();
  linkedList.display(linkedList.head);
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.display(linkedList.head);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insert(5);
  linkedList.display(linkedList.head);
  linkedList.remove();
  linkedList.display(linkedList.head);
  linkedList.remove();
  linkedList.remove();
  linkedList.remove();
  linkedList.display(linkedList.head);
  linkedList.remove();
  linkedList.display(linkedList.head);
  linkedList.remove();
  linkedList.display(linkedList.head);
};

run();
