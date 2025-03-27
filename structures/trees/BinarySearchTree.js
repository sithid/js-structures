class BinaryTreeNode {
  constructor(data, parent = null, left = null, right = null) {
    this.data = data; // The data stored in the node. This should be something comparable.
    this.root = parent; // The root parent node this node was added to.  This will be null for the root node itself.
    this.left = left; // The reference to the left node. May be null.
    this.right = right; // The reference to the right node.  May be null.
  }
  insertChild(data) {
    if (data < this.data) {
      if (this.left !== null) this.left.insertChild(data);
      else {
        this.left = new BinaryTreeNode(data, this);
        return { success: true, side: 'left' };
      }
    } else if (data > this.data) {
      if (this.right !== null) this.right.insertChild(data);
      else {
        this.right = new BinaryTreeNode(data, this);
        return { success: true, side: 'right' };
      }
    } else if (data === this.data) {
      return { success: false, side: null };
    }

    return true;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root; // The root node of the tree.
    this.size = 0; // Should be the total sum of all nodes on either branch, including the root node.
    this.leftCount = 0; // Should be the total sum of all nodes on the left branch;
    this.rightCount = 0; // Should be the total sum of all nodes on the right branch.
    this.min = null; // Should store the NODE reference to the min node in the tree.
    this.max = null; // Should store the NODE reference to the max node in the tree.
  }

  insert(data) {
    if (typeof data !== 'number' && typeof data !== "string") return; // numbers and strings are both easily comparabile in javascript

    let newNode = new BinaryTreeNode(data); // ok, we need a new node now.

    if (this.size === 0) { // this is the first node, make it root and set min and max.
      this.root = newNode;
      this.min = newNode;
      this.max = newNode;
      ++this.size; // do not increment left or right count, this is the root parent node, current there are no left or right
      return;
    } else {
      if (data < this.min.data) { // determine branch: left
        // if the data is less than the min nodes data, we know it belongs on the left most branch after min.
        this.min.left = newNode; // assign min.left to the new node.
        newNode.root = this.min;
        this.min = newNode; // reassign min to the new node now that weve updated the old min.left branch.
        ++this.size;    // update size/counts
        ++this.leftCount;

        return;
      } else if (data > this.max.data) { // determine branch: right
        // if the data is greater than the max nodes data, we know it belongs on the right most branch after max.
        this.max.right = newNode; // assign max.right to the new node
        newNode.root = this.max;
        this.max = newNode; // reassign max to the new node now that weve updated the old max.right branch.
        ++this.size;    // update size/counts;
        ++this.rightCount;

        return;
      } else {
        const { success, side } = this.root.insertChild(data);

        if (success) {
          if (side === 'left') ++this.leftCount;
          if (side === 'right') ++this.rightCount;
          ++this.size;
        }
      }
    }
  }
}

export { BinarySearchTree, BinaryTreeNode };
