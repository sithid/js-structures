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

  // Insert a new node at the head of the linked list.
  push(data) {
    let newHead = new SinglyLinkedListNode(data);

    if (this.head === null) {
      this.head = newHead;
      ++this.count;
      return;
    }

    newHead.next = this.head;
    this.head = newHead;
    ++this.count;
  }

  pop() {
    if (this.count < 1) {
      return null;
    } else {
      let data = this.head.data;

      if (this.count > 1) {
        this.head = this.head.next;
        --this.count;

        return data;
      } else {
        this.head = null;
        --this.count;
        return data;
      }
    }
  }

  peek() {
    if (this.head === null) {
      return null;
    }

    return this.head.data;
  }
}

module.exports = { SinglyLinkedList };
