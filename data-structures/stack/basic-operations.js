var { Stack } = require('./stack');

var stack = new Stack(5);
stack.push(100);
stack.push(200);
stack.push(300);

stack.list();

stack.push(400);
stack.push(500);
stack.push(600);

stack.list();

stack.pop();
stack.pop();
stack.pop();

stack.list();
stack.pop();
stack.pop();
stack.pop();