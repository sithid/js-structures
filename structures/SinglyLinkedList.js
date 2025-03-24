class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  push(data) {
    let newHead = new SinglyLinkedListNode(data);
  }

  pop(data) {}

  peek(index) {}
}

module.exports = { LinkedList };