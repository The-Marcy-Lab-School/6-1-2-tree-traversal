class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  #length = 0;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  appendToTail(data) {
    const newNode = new Node(data);
    this.#length++;

    if (!this.head && !this.tail) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }
  prependToHead(data) {
    const newNode = new Node(data);
    this.#length++;

    if (!this.head && !this.tail) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
  }
  removeHead() {
    const data = this.head.data;
    this.head = this.head.next;
    this.#length--;
    return data;
  }
  contains(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  length() {
    return this.#length;
  }
}

const printList = (current) => {
  let result = "";
  while (current) {
    result += `${current.data} -> `;
    current = current.next;
  }
  result += "null";
  console.log(result);
};
/* Example List: 
    1 -> 5 -> 7 -> 10 -> null
*/
let list = new LinkedList();
list.appendToTail(1);
list.appendToTail(5);
list.appendToTail(7);
list.appendToTail(10);
printList(list.head);

const printForwardIterative = current => {
  console.log(`Print Forward - Iterative:`);
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
};
printForwardIterative(list.head);
/* Time Complexity: O(N)
  Space Complexity: O(1)
*/

const printForwardRecursive = current => {
  if (current === null) { return; } //Base Case
  console.log(current.data); //Action Step
  printForwardRecursive(current.next); //Next Traversal
};
console.log(`Print Forward - Recursive:`);
printForwardRecursive(list.head);
/* Time Complexity: O(N)
  Space Complexity: O(N)
*/

const printBackwardRecursive = current => {
  if (current === null) { return; } //Base Case
  printBackwardRecursive(current.next); //Next Traversal
  console.log(current.data); //Action Step
};
console.log(`Print Backward - Recursive:`);
printBackwardRecursive(list.head);
/* Time Complexity: O(N)
  Space Complexity: O(N)
*/

const printBothRecursive = current => {
  if (current === null) { return; } //Base Case
  console.log(current.data); //Action Step
  printBothRecursive(current.next); //Next Traversal
  console.log(current.data); //Action Step
};
console.log(`Print Both - Recursive:`);
printBothRecursive(list.head);
/* Time Complexity: O(N)
  Space Complexity: O(N)
*/
