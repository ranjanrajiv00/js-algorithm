var { Stack } = require('./stack');

function isOperand(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

function postfixToInfix(exp) {
    var stack = new Stack(100);
    var length = exp.length;
    var result = '';

    for (var i = 0; i < length; i++) {
        // Push operands 
        if (isOperand(exp[i])) {
            stack.push(exp[i]);
        }

        // If operator then pop two operands 
        else {
            var operand1 = stack.peek();
            stack.pop();
            var operand2 = stack.peek();
            stack.pop();
            stack.push("(" + operand1 + exp[i] + operand2 + ")");
        }
    }

    // Last item in stack will be final result
    return stack.peek();
}

var exp = "ab*c+";
var result = postfixToInfix(exp);
console.log(result);