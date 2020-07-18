// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
        this.count = 1;
    }
}

class AVLTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }

    // A utility function to get height of the tree 
    height(n) {
        if (n == null)
            return 0;
        return n.height;
    }

    // A utility function to get maximum of two integers 
    max(a, b) {
        return (a > b) ? a : b;
    }

    // A utility function to right rotate subtree rooted with y 
    rightRotate(y) {
        let x = y.left;
        let n1 = x.right;

        // Perform rotation 
        x.right = y;
        y.left = n1;

        // Update heights 
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

        // Return new root 
        return x;
    }

    // A utility function to left rotate subtree rooted with x 
    leftRotate(x) {
        let y = x.right;
        let n1 = y.left;

        // Perform rotation 
        y.left = x;
        x.right = n1;

        // Update heights 
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

        // Return new root 
        return y;
    }

    // Get Balance factor of node N 
    getBalance(node) {
        if (node == null)
            return 0;
        return this.height(node.left) - this.height(node.right);
    }

    insert(node, data) {
        /* 1.  Perform the normal BST rotation */
        if (!node)
            return new Node(data);

        // If key already exists in BST, increment count and return 
        if (data == node.data) {
            (node.count)++;
            return node;
        }

        /* Otherwise, recur down the tree */
        if (data < node.data)
            node.left = this.insert(node.left, data);
        else
            node.right = this.insert(node.right, data);

        /* 2. Update height of this ancestor node */
        node.height = this.max(this.height(node.left), this.height(node.right)) + 1;

        /* 3. Get the balance factor of this ancestor node to check whether 
           this node became unbalanced */
        let balance = this.getBalance(node);

        // If this node becomes unbalanced, then there are 4 cases 

        // Left Left Case 
        if (balance > 1 && data < node.left.data)
            return this.rightRotate(node);

        // Right Right Case 
        if (balance < -1 && data > node.right.data)
            return this.leftRotate(node);

        // Left Right Case 
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case 
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        /* return the (unchanged) node pointer */
        return node;
    }

    deleteNode(root, data) {
        // STEP 1: PERFORM STANDARD BST DELETE 

        if (root == null)
            return root;

        // If the key to be deleted is smaller than the root's key, 
        // then it lies in left subtree 
        if (data < root.data)
            root.left = this.deleteNode(root.left, data);

        // If the key to be deleted is greater than the root's key, 
        // then it lies in right subtree 
        else if (data > root.data)
            root.right = this.deleteNode(root.right, data);

        // if key is same as root's key, then This is the node 
        // to be deleted 
        else {
            // If key is present more than once, simply decrement 
            // count and return 
            if (root.count > 1) {
                root.count--;
                return root;
            }
            // Else, delete the node 

            // node with only one child or no child 
            if ((root.left == null) || (root.right == null)) {
                let temp = root.left ? root.left : root.right;

                // No child case 
                if (temp == null) {
                    temp = root;
                    root = null;
                }
                else // One child case 
                    root = temp; // Copy the contents of the non-empty child 
            }
            else {
                // node with two children: Get the inorder successor (smallest in the right subtree) 
                let temp = this.findMin(root.right);

                // Copy the inorder successor's data to this node and update the count 
                root.data = temp.data;
                root.count = temp.count;
                temp.count = 1;

                // Delete the inorder successor 
                root.right = this.deleteNode(root.right, temp.data);
            }
        }

        // If the tree had only one node then return 
        if (root == null)
            return root;

        // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE 
        root.height = this.max(this.height(root.left), this.height(root.right)) + 1;

        // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether 
        // this node became unbalanced) 
        var balance = this.getBalance(root);

        // If this node becomes unbalanced, then there are 4 cases 

        // Left Left Case 
        if (balance > 1 && this.getBalance(root.left) >= 0)
            return this.rightRotate(root);

        // Left Right Case 
        if (balance > 1 && this.getBalance(root.left) < 0) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        // Right Right Case 
        if (balance < -1 && this.getBalance(root.right) <= 0)
            return this.leftRotate(root);

        // Right Left Case 
        if (balance < -1 && this.getBalance(root.right) > 0) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    // Performs inorder traversal of a tree 
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Performs preorder traversal of a tree     
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Performs postorder traversal of a tree 
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    getRootNode() {
        return this.root;
    }

    findMin(node) {
        if (!node.left)
            return node;
        else {
            return this.findMin(node.left);
        }
    }

    findMax(node) {
        if (!node.right)
            return node;
        else {
            return this.findMax(node.right);
        }
    }

    search(node, data) {
        // if trees is empty return null 
        if (node === null)
            return null;

        // if data is less than node's data move left 
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data move left 
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data return node 
        else
            return node;
    }
}

var avl = new AVLTree();
var root = null;

/* Constructing tree given in the above figure */
root = avl.insert(root, 9); 
root = avl.insert(root, 5); 
root = avl.insert(root, 10); 
root = avl.insert(root, 5); 
root = avl.insert(root, 9); 
root = avl.insert(root, 7); 
root = avl.insert(root, 17); 

console.log("Pre order traversal of the constructed AVL tree is"); 
avl.preorder(root); 

root = avl.deleteNode(root, 10); 

console.log("\nPre order traversal after deletion of 9"); 
avl.preorder(root);