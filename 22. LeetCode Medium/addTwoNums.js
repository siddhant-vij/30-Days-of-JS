// LC 2: Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const node = new ListNode(val);
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

  display(head) {
    let current = head;
    if (!current) {
      process.stdout.write("List is empty\n");
      return;
    }
    while (current.next) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    process.stdout.write(current.val + "\n");
  }
}

const createListFromArr = (arr) => {
  const ll = new LinkedList();
  arr.forEach((num) => ll.insert(num));
  return ll;
};

const printList = (head) => {
  const ll = new LinkedList();
  let current = head;
  while (current) {
    ll.insert(current.val);
    current = current.next;
  }
  ll.display(head);
};

const addTwoNumbers = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;
  let ptr1 = list1;
  let ptr2 = list2;
  let head = null;
  let tail = null;
  let carry = 0;
  while (ptr1 || ptr2) {
    let sum = carry;
    if (ptr1) {
      sum += ptr1.val;
      ptr1 = ptr1.next;
    }
    if (ptr2) {
      sum += ptr2.val;
      ptr2 = ptr2.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    const node = new ListNode(sum);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  }
  if (carry) {
    tail.next = new ListNode(carry);
  }
  return head;
};

const list11 = createListFromArr([2, 4, 3]);
const list12 = createListFromArr([5, 6, 4]);
printList(addTwoNumbers(list11.head, list12.head));

const list21 = createListFromArr([0]);
const list22 = createListFromArr([0]);
printList(addTwoNumbers(list21.head, list22.head));

const list31 = createListFromArr([9, 9, 9, 9, 9, 9, 9]);
const list32 = createListFromArr([9, 9, 9, 9]);
printList(addTwoNumbers(list31.head, list32.head));
