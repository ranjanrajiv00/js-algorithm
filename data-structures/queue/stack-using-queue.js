var { Queue } = require('./queue');

class Stack {
    constructor() {
        this.queue = new Queue(5);
    }
    // Push operation 
    push(val) {
        //  Get previous size of queue 
        var size = this.queue.size;

        // Push current element 
        this.queue.enqueue(val);

        // Pop (or Dequeue) all previous 
        // elements and put them after current 
        // element 
        for (var i = 0; i < size; i++) {
            // this will add front element into 
            // rear of queue 
            this.queue.enqueue(this.queue.getFront());

            // this will delete front element 
            this.queue.dequeue();
        }
    }

    // Removes the top element 
    pop() {
        if (this.queue.isEmpty())
            console.log('Stack is empty');
        else
            this.queue.dequeue();
    }

    // Returns top of stack 
    top() {
        return (this.queue.isEmpty()) ? -1 : this.queue.getFront();
    }

    // Returns true if Stack is empty else false 
    isEmpty() {
        return (this.queue.isEmpty());
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
console.log('Top - ', stack.top());

stack.pop();
stack.push(30);
stack.pop();
console.log('Top - ', stack.top());