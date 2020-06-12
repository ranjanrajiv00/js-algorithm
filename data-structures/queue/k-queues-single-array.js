class Queue {
    constructor(n, k) {
        this.front = [];
        this.rear = [];
        this.items = [];
        this.next = [];

        // Initialize all queues as empty 
        for (var i = 0; i < k; i++) {
            this.front[i] = -1;
        }

        // Initialize all spaces as free 
        this.free = 0;

        for (var i = 0; i < n - 1; i++) {
            this.next[i] = i + 1;
        }

        this.next[n - 1] = -1;  // -1 is used to indicate end of free list
    }

    enqueue(item, k) {
        // Overflow check 
        if (this.isFull()) {
            console.log("Queue Overflow");
            return;
        }

        var i = this.free;      // Store index of first free slot 

        // Update index of free slot to index of next slot in free list 
        this.free = this.next[i];

        if (this.isEmpty(k))
            this.front[k] = i;
        else
            this.next[this.rear[k]] = i;

        this.next[i] = -1;

        // Update next of rear and then rear for queue number 'k' 
        this.rear[k] = i;

        // Put the item in array 
        this.items[i] = item;
    }

    dequeue(k) {
        // Underflow check 
        if (this.isEmpty(k)) {
            console.log('Queue Underflow');
        }

        // Find index of front item in queue number 'k' 
        var i = this.front[k];

        this.front[k] = this.next[i];  // Change top to store next of previous top 

        // Attach the previous top to the beginning of free list 
        this.next[i] = this.free;
        this.free = i;

        // Return the previous top item 
        return this.items[i];
    }

    isEmpty(k) {
        return (this.front[k] == -1);
    }

    isFull() {
        return (this.free == -1);
    }
}


var queue = new Queue(6, 3);
queue.enqueue(100, 0);
queue.enqueue(200, 0);

queue.enqueue(300, 1);
queue.enqueue(400, 1);

queue.enqueue(500, 2);
queue.enqueue(600, 2);

console.log("Dequeue element from queue 2 is " + queue.dequeue(2));
console.log("Dequeue element from queue 1 is " + queue.dequeue(1));
console.log("Dequeue element from queue 0 is " + queue.dequeue(0));