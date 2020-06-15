var { BinaryTree }  = require('./binary-tree');

var bst = new BinaryTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

var root = bst.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27 
bst.inorder(root);

bst.remove(5); 

var root = bst.getRootNode(); 
console.log("Inorder Traversal"); 
  
// prints 7 9 10 13 15 17 22 25 27 
bst.inorder(root); 
              
console.log("Postorder Traversal"); 
bst.postorder(root); 
console.log("Preorder Traversal"); 
bst.preorder(root); 
