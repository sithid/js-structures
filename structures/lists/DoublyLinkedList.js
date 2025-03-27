class DoublyLinkedNode {
  constructor(data, root = null) {
    this.data = data;
    this.next = null;
    this.previous = root;
  }
}

// Basic implementation of a traditional doubly linked list.
// Push and pop operate on the head and tail nodes of the linked list.
// Traverse can go both ways.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertAtHead(data) {
    let newHead = new DoublyLinkedNode(data);

    if (this.head === null || this.count === 0) {
      this.head = newHead;
      this.tail = newHead;

      ++this.count;
    } else {
      let oldHead = this.head;

      this.head = newHead;

      newHead.next = oldHead;
      oldHead.previous = newHead;

      ++this.count;
    }
  }

  removeHead() {
    if (this.count < 1) return null;

    let data = this.head.data;

    if (this.head.next !== null) {
      let nextHead = this.head.next;

      this.head = nextHead;
      --this.count;
    } else {
      this.head = null;
      this.count = 0;
    }

    return data;
  }

  insertAtTail(data) {
    let newTail = new DoublyLinkedNode(data);

    if (this.tail === null || this.count === 0) {
      this.head = newTail;
      this.tail = newTail;

      ++this.count;
    } else {
      let oldTail = this.tail;

      this.tail = newTail;

      oldTail.next = newTail;
      newTail.previous = oldTail;

      ++this.count;
    }
  }

  removeTail() {
    if (this.count < 1) return null;

    let data = this.tail.data;

    if (this.tail.previous !== null) {
      let nextTail = this.tail.previous;
      this.tail.previous = null;
      nextTail.next = null;

      this.tail = nextTail;
      --this.count;
    } else {
      this.head = null;
      this.tail = null;
      this.count = 0;
    }

    return data;
  }

  peekHead() {
    if (this.head === null) {
      return null;
    }

    return this.head.data;
  }

  peekTail() {
    if (this.tail === null) {
      return null;
    }

    return this.tail.data;
  }

  traverse(fx = null) {
    let node = this.head;

    while (node !== null) {
      if (fx === null) console.log(node.data);
      else fx(node.data);

      node = node.next;
    }
  }

  reverse(fx = null) {
    let node = this.tail;

    while (node !== null) {
      if (fx === null) console.log(node.data);
      else fx(node.data);

      node = node.previous;
    }
  }

  toArray() {
    let arr = [];

    function addToArray(data) {
      arr.push(data);
    }

    this.traverse(addToArray);
    return arr;
  }
}

export { DoublyLinkedList, DoublyLinkedNode };
