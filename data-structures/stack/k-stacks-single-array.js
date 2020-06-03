class Stack {
    constructor(n, k) {
        this.top = [];
        this.items = [];
        this.next = [];

        // Initialize all stacks as empty 
        for (var i = 0; i < k; i++) {
            this.top[i] = -1;
        }

        // Initialize all spaces as free 
        this.free = 0;

        for (var i = 0; i < n - 1; i++) {
            this.next[i] = i + 1;
        }

        this.next[n - 1] = -1;  // -1 is used to indicate end of free list
    }

    push(item, k) {
        // Overflow check 
        if (this.isFull()) {
            console.log("Stack Overflow");
            return;
        }

        var i = this.free;      // Store index of first free slot 

        // Update index of free slot to index of next slot in free list 
        this.free = this.next[i];

        // Update next of top and then top for stack number 'sn' 
        this.next[i] = this.top[k];
        this.top[k] = i;

        // Put the item in array 
        this.items[i] = item;
    }

    pop(k) {
        // Underflow check 
        if (this.isEmpty(k)) {
            console.log('Stack Underflow');
        }

        // Find index of top item in stack number 'sn' 
        var i = this.top[k];

        this.top[k] = this.next[i];  // Change top to store next of previous top 

        // Attach the previous top to the beginning of free list 
        this.next[i] = this.free;
        this.free = i;

        // Return the previous top item 
        return this.items[i];
    }

    isEmpty(k) {
        return (this.top[k] == -1);
    }

    isFull() {
        return (this.free == -1);
    }
}


var stack = new Stack(6, 3);
stack.push(100, 0);
stack.push(200, 0);

stack.push(300, 1);
stack.push(400, 1);

stack.push(500, 2);
stack.push(600, 2);

console.log("Popped element from stack 2 is " + stack.pop(2));
console.log("Popped element from stack 1 is " + stack.pop(1));
console.log("Popped element from stack 0 is " + stack.pop(0));