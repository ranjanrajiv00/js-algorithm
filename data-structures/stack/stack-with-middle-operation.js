class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.mid = null;
        this.size = 0
    }

    push(data) {
        /* allocate node and put in data */
        var node = new Node(data);

        /* Since we are adding at the beginning, prev is always NULL */

        /* link the old list off the new DLLNode */
        node.next = this.head;

        /* Increment count of items in stack */
        this.size++;

        /* Change mid pointer in two cases  
        1) Linked List is empty  
        2) Number of nodes in linked list is odd */
        if (this.size == 1) {
            this.mid = node;
        }
        else {
            this.head.prev = node;

            if (!(this.size & 1)) // Update mid if ms->count is even 
                this.mid = this.mid.prev;
        }

        /* move head to point to the new DLLNode */
        this.head = node;
    }

    pop() {
        /* Stack underflow */
        if (this.size == 0) {
            console.log("Stack is empty");
            return -1;
        }

        var item = this.head.data;
        this.head = this.head.next;

        // If linked list doesn't  
        // become empty, update prev  
        // of new head as NULL  
        if (this.head != null)
            this.head.prev = null;

        this.size -= 1;

        // update the mid pointer when  
        // we have odd number of  
        // elements in the stack, i,e  
        // move down the mid pointer.  
        if ((this.size) & 1)
            this.mid = this.mid.next;

        return item;
    }

    findMiddle() {
        if (this.size == 0) {
            console.log("Stack is empty now");
            return -1;
        }

        return this.mid.data;
    }
}

var stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);

console.log("Item popped is " + stack.pop());
console.log("Middle Element is " + stack.findMiddle());