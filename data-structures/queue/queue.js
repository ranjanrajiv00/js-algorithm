class Queue {
    constructor(capacity) {
        this.front = 0;
        this.size = 0;
        this.rear = capacity - 1;
        this.capacity = capacity;
        this.items = [];
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log('Queue is Full');
            return;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }

        var item = this.items[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return item;
    }

    getFront() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }

        return this.items[this.front];
    }

    getRear() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }

        return this.items[this.rear];
    }

    list() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
            return;
        }
        else {
            var front = this.front;
            console.log('***List***');

            while (front != this.rear) {
                console.log(this.items[front]);
                front = (front + 1) % this.capacity;
            }

            console.log(this.items[front]);
        }
    }
}

module.exports = {
    Queue: Queue
}