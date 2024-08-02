// LC 21: Merge Two Sorted Lists

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

const mergeLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;
  let ptr1 = list1;
  let ptr2 = list2;
  let head = null;
  let tail = null;
  if (ptr1.val <= ptr2.val) {
    head = tail = ptr1;
    ptr1 = ptr1.next;
  } else {
    head = tail = ptr2;
    ptr2 = ptr2.next;
  }
  while (ptr1 != null && ptr2 != null) {
    if (ptr1.val <= ptr2.val) {
      tail.next = ptr1;
      tail = tail.next;
      ptr1 = ptr1.next;
    } else {
      tail.next = ptr2;
      tail = tail.next;
      ptr2 = ptr2.next;
    }
  }
  if (ptr1 == null) tail.next = ptr2;
  else tail.next = ptr1;
  return head;
};

const list11 = createListFromArr([1, 2, 4]);
const list12 = createListFromArr([1, 3, 4]);
printList(mergeLists(list11.head, list12.head));

const list21 = createListFromArr([]);
const list22 = createListFromArr([]);
printList(mergeLists(list21.head, list22.head));

const list31 = createListFromArr([]);
const list32 = createListFromArr([0]);
printList(mergeLists(list31.head, list32.head));
