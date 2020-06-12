var { Queue } = require('./queue');

function minIndex(sortedIndex) {
    var min_index = -1;
    var min_val = Infinity;
    var n = queue.size;
    for (var i = 0; i < n; i++) {
        var curr = queue.getFront();
        queue.dequeue();

        if (curr <= min_val && i <= sortedIndex) {
            min_index = i;
            min_val = curr;
        }
        queue.enqueue(curr);
    }
    return min_index;
}

// Moves given minimum element to rear of queue 
function insertMinToRear(min_index) {
    var min_val;
    var n = queue.size;
    for (var i = 0; i < n; i++) {
        var curr = queue.getFront();
        queue.dequeue();

        if (i != min_index)
            queue.enqueue(curr);
        else
            min_val = curr;
    }
    queue.enqueue(min_val);
}

function sort() {
    for (var i = 1; i <= queue.size; i++) {
        var min_index = minIndex(queue.size - i);
        insertMinToRear(min_index);
    }
}

var queue = new Queue(5);

queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(1);

sort();

queue.list();