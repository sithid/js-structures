const { SinglyLinkedList } = require("./structures/SinglyLinkedList.js");


function testSLL() {
  console.log("Testing various data structures implemented in javascript.");

  const ll = new SinglyLinkedList();

  for (let i = 1; i <= 10; i++)
    ll.push(i);

  console.log("linkedlist.peek(): " + ll.peek());
  let data = ll.pop();
  console.log("linkedlist.pop(): " + data);
  console.log("linkedlist.count:" + ll.count);
  console.log("\n");

  while (data != null) {
    console.log("linkedlist.peek(): " + ll.peek());
    data = ll.pop();
    console.log("linkedlist.pop(): " + data);
    console.log("linkedlist.count:" + ll.count);
    console.log("\n");
  }

  console.log("SinglyLinkedList.peek(): " + ll.peek());
  console.log("linkedlist.count: " + ll.count);
}

testSLL();