/*
 * Use Case: Never-ending loop of players to take their turn until there is a winner.
 * let curPlayer = list.head;
 *
 * while ( !winner ) {
 *    curPlayer.takeTurn();
 *    curPlayer = curPlayer.next;
 * }
 *
 * console.log("Congrats " + winningPlayer.name ", you WIN!");
 */

const { DoublyLinkedNode } = require("./DoublyLinkedList.js");

class CircularDoublyLinkedList {
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

      newHead.next = newHead;
      newHead.previous = newHead;
      ++this.count;
    } else {
      let oldHead = this.head;

      this.head = newHead;
      newHead.next = oldHead;
      oldHead.previous = newHead;

      newHead.previous = this.tail;
      this.tail.next = newHead;

      ++this.count;
    }
  }

  insertAtTail(data) {
    let newTail = new DoublyLinkedNode(data);

    if (this.tail === null || this.count === 0) {
      this.head = newTail;
      this.tail = newTail;

      newTail.next = newTail;
      newTail.previous = newTail;
      ++this.count;
    } else {
      let oldTail = this.tail;

      this.tail = newTail;
      oldTail.next = newTail;
      newTail.previous = oldTail;

      newTail.next = this.head;
      this.head.previous = newTail;

      ++this.count;
    }
  }

  removeHead() {
    if (this.count < 1) return null;

    let data = this.head.data;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
      this.count = 0;
    } else {
      let newHead = this.head.next;
      this.head = newHead;

      this.head.previous = this.tail;
      this.tail.next = this.head;
      --this.count;
    }

    return data;
  }

  removeTail() {
    if (this.count < 1) return null;

    let data = this.tail.data;

    if (this.count === 1) {
      this.head = null;
      this.tail = null;
      this.count = 0;
    } else {
      let newTail = this.tail.previous;
      this.tail = newTail;

      this.tail.next = this.head;
      this.head.previous = this.tail;
      --this.count;
    }

    return data;
  }

  traverse(fx = null) {
    if (this.count < 1) return;

    let node = this.head;
    let count = 0;

    while (count < this.count) {
      if (fx === null) console.log(node.data);
      else fx(node.data);

      node = node.next;
      count++;
    }
  }

  reverse(fx = null) {
    if (this.count < 1) return;

    let node = this.tail;
    let count = 0;

    while (count < this.count) {
      if (fx === null) console.log(node.data);
      else fx(node.data);

      node = node.previous;
      count++;
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

module.exports = { CircularDoublyLinkedList, DoublyLinkedNode };
