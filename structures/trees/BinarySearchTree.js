class BinaryTreeNode {
  constructor(data, parent = null, left = null, right = null) {
    this.data = data; // The data stored in the node. This should be something comparable.
    this.root = parent; // The root parent node this node was added to.  This will be null for the root node itself.
    this.left = left; // The reference to the left node. May be null.
    this.right = right; // The reference to the right node.  May be null.
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root; // The root node of the tree.
    this.totalCount = 0; // Should be the total sum of all nodes on either branch, including the root node.
    this.leftCount = 0; // Should be the total sum of all nodes on the left branch;
    this.rightCount = 0; // Should be the total sum of all nodes on the right branch.
    this.min = null; // Should store the NODE reference to the min node in the tree.
    this.max = null; // Should store the NODE reference to the max node in the tree.
  }
}
