import { DoublyLinkedList } from './structures/lists/DoublyLinkedList.js';
import { SinglyLinkedList } from './structures/lists/SinglyLinkedList.js';
import { CircularDoublyLinkedList } from './structures/lists/CircularDoublyLinkedList.js';
import { BinarySearchTree } from './structures/trees/BinarySearchTree.js';

function testSLLOne() {
  console.log('Testing various data structures implemented in javascript.');

  const ll = new SinglyLinkedList();

  for (let i = 1; i <= 10; i++) ll.push(i);

  console.log('linkedlist.peek(): ' + ll.peek());
  let data = ll.pop();
  console.log('linkedlist.pop(): ' + data);
  console.log('linkedlist.count:' + ll.count);

  while (data != null) {
    console.log('linkedlist.peek(): ' + ll.peek());
    data = ll.pop();
    console.log('linkedlist.pop(): ' + data);
    console.log('linkedlist.count:' + ll.count);
  }
}

function testSLLTwo() {
  let sum = 0;

  function sumData(data) {
    sum += data;
  }

  let list = new SinglyLinkedList();

  list.push(10);
  list.push(15);
  list.push(20);
  list.push(19);
  list.push(53);

  list.traverse();
  list.traverse(sumData);
  console.log('The sum of all of the data in the linked list is ' + sum);

  const arr = list.toArray();
  console.log('list.toArray(): ' + arr);
}

function testDLL() {
  let sum = 0;

  function sumData(data) {
    sum += data;
  }

  function subData(data) {
    sum -= data;
  }

  let list = new DoublyLinkedList();

  list.insertAtHead(10);
  list.insertAtTail(15);
  list.insertAtHead(20);
  list.insertAtTail(19);
  list.insertAtHead(53);
  list.insertAtTail(12);

  console.log('Traversing forward through the linked list from the head: ');

  list.traverse();
  list.traverse(sumData);

  console.log('Sum after traversal: ' + sum);

  console.log('Reversing backwards through the linked list from the tail: ');

  list.reverse();
  list.reverse(subData);

  console.log('Sum after reversal: ' + sum);

  console.log('peekTail: ' + list.peekTail());
  let data = list.removeTail();
  console.log('data removed from tail: ' + data);
  console.log('peekTail to verify new tail: ' + list.peekTail());

  const arr = list.toArray();
  console.log('list.toArray(): ' + arr);
}

function testCDLL() {
  let sum = 0;

  function sumData(data) {
    sum += data;
  }

  function subData(data) {
    sum -= data;
  }

  let list = new CircularDoublyLinkedList();

  list.insertAtHead(10);
  list.insertAtTail(15);
  list.insertAtHead(20);
  list.insertAtTail(19);
  list.insertAtHead(53);
  list.insertAtTail(12);

  console.log('Traversing once through the circular list from head: ');
  list.traverse();
  list.traverse(sumData);
  console.log('Sum after first traversal: ' + sum);

  console.log('\nReversing once through the circular list from tail: ');
  list.reverse();
  list.reverse(subData);
  console.log('Sum after reversal: ' + sum);

  console.log(
    "\nDemonstrating circular nature - following 'next' pointer 12 times:"
  );
  let current = list.head;
  for (let i = 0; i < 12; i++) {
    console.log(current.data);
    current = current.next;
  }

  console.log('\nRemoving from both ends:');
  console.log('Remove head: ' + list.removeHead());
  console.log('Remove tail: ' + list.removeTail());

  console.log('\nFinal list state:');
  list.traverse();

  const arr = list.toArray();
  console.log('list.toArray(): ' + arr);
}

function testLinkedLists() {
  console.log('\n\r');
  console.log('TESTING: Linked list 1');
  testSLLOne();

  console.log('\n\r');
  console.log('TESTING: Linked List 2');
  testSLLTwo();

  console.log('\n\r');
  console.log('TESTING: Doubly Linked List');
  testDLL();

  console.log('\n\r');
  console.log('TESTING: Circular Doubly Linked List');
  testCDLL();
}

function testBST() {
  let bst = new BinarySearchTree();

  console.log(bst);
}

function testTrees() {
  console.log('\n\r');
  console.log('TESTING: Binary Search Tree');
  testBST();
}

testLinkedLists();
testTrees();
