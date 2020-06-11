var { Stack } = require('./stack');

// Insert the given key in sorted stack while maintaining its sorted order
function sortedInsert(item) {
    if(stack.isEmpty() || item > stack.peek())
        stack.push(item);
    else {
        var x = stack.peek();
        stack.pop();

        sortedInsert(item);
        stack.push(x);
    }
}

function sort() {
    if(!stack.isEmpty()){
        // Hold all items in Function Call Stack until we reach end of the stack  
        var item = stack.peek();
        stack.pop();
        sort();

        sortedInsert(item);
    }
}

var stack = new Stack(10);

stack.push(10);
stack.push(2);
stack.push(30);
stack.push(4);
stack.push(5);

sort();
console.log(stack);