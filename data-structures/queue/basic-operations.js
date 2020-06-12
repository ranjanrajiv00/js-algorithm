var { Queue } = require('./queue');

var queue = new Queue(5);
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);

queue.list();

queue.enqueue(400);
queue.enqueue(500);
queue.enqueue(600);

queue.list();

queue.dequeue();
queue.dequeue();

queue.list();

queue.enqueue(100);
queue.enqueue(200);

queue.list();
