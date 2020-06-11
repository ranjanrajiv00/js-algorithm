var { Stack } = require('./stack');

function insertAtBottom(item) {
    if(stack.isEmpty())
        stack.push(item);
    else {
        var x = stack.peek();
        stack.pop();

        insertAtBottom(item);
        stack.push(x);
    }
}

function reverse() {
    if(!stack.isEmpty()){
        // Hold all items in Function Call Stack until we reach end of the stack  
        var item = stack.peek();
        stack.pop();
        reverse();

        // Insert all the items held in Function Call Stack one by one from the bottom to top.
        // Every item is inserted at the bottom  
        insertAtBottom(item);
    }
}

var stack = new Stack(10);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

reverse(stack);
console.log(stack);