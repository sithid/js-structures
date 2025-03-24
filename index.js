const { SinglyLinkedList } = require("./structures/SinglyLinkedList.js");


function testSLLOne() {
  console.log("Testing various data structures implemented in javascript.");

  const ll = new SinglyLinkedList();

  for (let i = 1; i <= 10; i++)
    ll.push(i);

  console.log("linkedlist.peek(): " + ll.peek());
  let data = ll.pop();
  console.log("linkedlist.pop(): " + data);
  console.log("linkedlist.count:" + ll.count);

  while (data != null) {
    console.log("linkedlist.peek(): " + ll.peek());
    data = ll.pop();
    console.log("linkedlist.pop(): " + data);
    console.log("linkedlist.count:" + ll.count);
  }

  console.log("SinglyLinkedList.peek(): " + ll.peek());
  console.log("linkedlist.count: " + ll.count);
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
  console.log("The sum of all of the data in the linked list is " + sum);

  const arr = list.toArray();
  console.log("list.toArray(): " + arr);
}

console.log("TESTING testSLLOne");
testSLLOne();

console.log("\n\r");

console.log("TESTING testSLLTwo");
testSLLTwo();