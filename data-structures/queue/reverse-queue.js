var { Queue } = require('./queue');
var { Stack } = require('../stack/stack');

function reverse() {
    var stack = new Stack(5);

    while (!queue.isEmpty()) {
        stack.push(queue.getFront());
        queue.dequeue();
    }

    while (!stack.isEmpty()) {
        queue.enqueue(stack.peek());
        stack.pop();
    }
}

var queue = new Queue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

reverse();

queue.list();