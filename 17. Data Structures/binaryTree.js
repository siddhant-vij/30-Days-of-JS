class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data, direction) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode, direction);
    }
  }

  insertNode(node, newNode, direction) {
    if (direction === "left") {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode, direction);
      }
    } else if (direction === "right") {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode, direction);
      }
    }
  }
}

const createTree = () => {
  const tree = new BinaryTree();
  tree.insert(1, "left");
  tree.insert(2, "right");
  tree.insert(3, "left");
  tree.insert(4, "left");
  tree.insert(5, "right");
  return tree;
};

const inOrder = (node) => {
  if (node) {
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
  }
};

const tree = createTree();
inOrder(tree.root);