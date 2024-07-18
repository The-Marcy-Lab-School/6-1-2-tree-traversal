class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  insertLeft(value) {
    this.left = new BinaryTree(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTree(value);
    return this.right;
  }
}
const printTree = (node, prefix = "", isLeft = true) => {
  node.right &&
    printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
  node.left && printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
};
/* Example Tree:
         4
       /   \
      2     5
     / \     \
    1   3     7
             / \
            6   8
*/
let root = new BinaryTree(4);
root.insertLeft(2);
root.insertRight(5);
root.left.insertLeft(1);
root.left.insertRight(3);
root.right.insertRight(7);
root.right.right.insertLeft(6);
root.right.right.insertRight(8);
console.log(`Binary Search Tree (BST): `);
printTree(root);

/*Breadth-Frist Search: Iterative*/
const bfsIterative = (root) => {
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.data);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return result;
};
console.log(`BFS Iterative: [${bfsIterative(root)}]`);
/* Time Complexity: O(N)
   Space Complexity: Queue: O(N) + Result Array: O(N) = O(2N) => O(N)
*/

/*Depth-Frist Search: Iterative*/
const dfsIterative = (root) => {
  let stack = [root];
  let result = [];
  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.data);

    if (current.left !== null) {
      stack.push(current.left);
    }
    if (current.right !== null) {
      stack.push(current.right);
    }
  }
  return result;
};
console.log(`DFS Iterative: [${dfsIterative(root)}]`);
/* Time Complexity: O(N)
   Space Complexity: Stack: O(N) + Result Array: O(N) = O(2N) => O(N)
*/

/*Depth-First Search: Pre-order Traversal*/
let resultPre = [];
const preOrder = (current) => {
  if (current === null) {
    return;
  } //Base Case
  resultPre.push(current.data); //Action Step
  preOrder(current.left); //Left Traversal
  preOrder(current.right); //Right Traversal
};
preOrder(root);
console.log(`DFS Pre-Order: [${resultPre}]`);
/* Time Complexity: O(N)
   Space Complexity: O(N)
*/

/*Depth-First Search: In-order Traversal*/
let resultIn = [];
const inOrder = (current) => {
  if (current === null) {
    return;
  } //Base Case
  inOrder(current.left); //Left Traversal
  resultIn.push(current.data); //Action Step
  inOrder(current.right); //Right Traversal
};
inOrder(root);
console.log(`DFS In-Order: [${resultIn}]`);
/* Time Complexity: O(N)
   Space Complexity: O(N)
*/

/*Depth-First Search: Post-order Traversal*/
let resultPost = [];
const postOrder = (current) => {
  if (current === null) {
    return;
  } //Base Case
  postOrder(current.left); //Left Traversal
  postOrder(current.right); //Right Traversal
  resultPost.push(current.data); //Action Step
};
postOrder(root);
console.log(`DFS Post-Order: [${resultPost}]`);
/* Time Complexity: O(N)
   Space Complexity: O(N)
*/

const invertIterative = root => {
  let stack = [root];
  while(stack.length>0) {
    let current = stack.pop();

    let left = current.left;
    let right = current.right;
    current.left = right;
    current.right = left;

    if(current.left !== null) { stack.push(current.left); }
    if(current.right !== null) { stack.push(current.right); }
  }
  
  return root;
};
invertIterative(root);
console.log(`Invert BST - Iterative:`);
printTree(root);
/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

const invertRecursive = current => {
  if (current === null) { return; }

  let left = current.left;
  let right = current.right;
  current.left = right;
  current.right = left;
  
  invertRecursive(current.left);
  invertRecursive(current.right);
}
invertRecursive(root);
console.log(`Invert BST - Recursive:`);
printTree(root);
//THE SAME BST gets inverted back to the original!
/*
Time Complexity: O(N)
Space Complexity: O(N)
*/
