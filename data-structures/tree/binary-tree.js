// Node class 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }

    insert(data) {
        var node = new Node(data);
        if (!this.root) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(parent, node) {
        if (node.data < parent.data) {
            if (!parent.left) {
                parent.left = node;
            }
            else {
                this.insertNode(parent.left, node);
            }
        }
        else {
            if (!parent.right) {
                parent.right = node;
            }
            else {
                this.insertNode(parent.right, node);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        // if the root is null then tree is empty
        if (!node)
            return null;

        // if data to be delete is less than roots data then move to left subtree 
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }

        // if data to be delete is greater than roots data then move to right subtree
        else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        // if data is similar to the root's data then delete this node
        else {
            // deleting node with no children 
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            // deleting node with one children 
            if (!node.left) {
                node = node.right;
                return node;
            }
            else if (!node.right) {
                node = node.left;
                return node;
            }

            // Deleting node with two children minumum node of the rigt subtree is stored in aux 
            var deletingNode = this.findMin(node.right);
            node.data = deletingNode.data;

            node.right = this.removeNode(node.right, deletingNode.data);
            return node;
        }
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

module.exports = {
    BinaryTree: BinaryTree
}