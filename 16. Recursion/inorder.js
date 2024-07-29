class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  inOrder() {
    let result = [];
    if (this.left) {
      result = result.concat(this.left.inOrder());
    }
    result.push(this.value);
    if (this.right) {
      result = result.concat(this.right.inOrder());
    }
    return result;
  }
}

const tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(14);
tree.insert(11);

console.log(tree.inOrder()); // sorted
