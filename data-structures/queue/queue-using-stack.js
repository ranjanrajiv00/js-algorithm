var { Stack } = require('../stack/stack');

class Queue {
    constructor() {
        this.stack1 = new Stack(5);
        this.stack2 = new Stack(5);
    }

    enqueue(x) {
        // Move all elements from s1 to s2 
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.peek());
            this.stack1.pop();
        }

        // Push item into s1 
        this.stack1.push(x);

        // Push everything back to s1 
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.peek());
            this.stack2.pop();
        }
    }

    // Dequeue an item from the queue 
    dequeue() {
        // if first stack is empty 
        if (this.stack1.isEmpty()) {
            console.log('Queue is empty');
            return;
        }

        // Return top of s1 
        var x = this.stack1.peek();
        this.stack1.pop();
        return x;
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('Dequeue - ' + queue.dequeue());
console.log('Dequeue - ' + queue.dequeue());