class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Basic implementation of a traditional singly linked list.
// Push and pop only operate on the head node of the linked list.
// Traverse goes on way, head->next->next.
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  // Insert a new node with specified data at the head of the linked list.
  // LIFO
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

  // Pop the data from the head node.
  // LIFO
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

  // Peek the data of the head node.
  peek() {
    if (this.head === null) {
      return null;
    }

    return this.head.data;
  }

  // Traverse the linked list, execute given function with the nodes data as param, essentially arr.forEach.
  // If fx is null, log the value of data to the console.
  traverse( fx = null) {
    let node = this.head;

    while( node !== null ) {
      if( fx === null )
        console.log(node.data);
      else
        fx(node.data);

      node = node.next;
    }
  }

  // Converts this linked list into an array of the list nodes data.
  toArray(){
    let arr = [];

    function addToArray(data) {
      arr.push(data);
    }
    
    // Demonstrate practical use of traverse.
    this.traverse(addToArray);
    return arr;
  }
}

module.exports = { SinglyLinkedList };
