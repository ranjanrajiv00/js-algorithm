var { Stack } = require('./stack');

function precedence(c) {
    if (c == '^')
        return 3;
    else if (c == '*' || c == '/')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}

function infixToPostfix(exp) {
    var stack = new Stack(100);
    var length = exp.length;
    var result = '';

    for (var i = 0; i < length; i++) {
        // If the scanned character is an operand, add it to result string. 
        if ((exp[i] >= 'a' && exp[i] <= 'z') || (exp[i] >= 'A' && exp[i] <= 'Z')) {
            result += exp[i];
        }

        // If the scanned character is an ‘(‘, push it to the stack. 
        else if (exp[i] === '(') {
            stack.push('(');
        }

        // If the scanned character is an ‘)’, pop and to result string from the stack 
        // until an ‘(‘ is encountered.
        else if (exp[i] === ')') {
            while (stack.peek() != '(') {
                var operator = stack.peek();
                stack.pop();
                result += operator;
            }
            stack.pop();
        }

        // If an operator is scanned 
        else {
            while (!stack.isEmpty() && precedence(exp[i]) <= precedence(stack.peek())) {
                var operator = stack.peek();
                stack.pop();
                result += operator;
            }
            stack.push(exp[i]);
        }
    }

    while (!stack.isEmpty()) {
        var operator = stack.peek();
        stack.pop();
        result += operator;
    }
    return result;
}

function infixToPrefix(exp) {
    /* Reverse String 
     * Replace ( with ) and vice versa 
     * Get Postfix 
     * Reverse Postfix  *  */
    var length = exp.length;

    // Reverse infix 
    exp = exp.split("").reverse();

    // Replace ( with ) and vice versa 
    for (var i = 0; i < length; i++) {
        if (exp[i] == '(') {
            exp[i] = ')';
        }
        else if (exp[i] == ')') {
            exp[i] = '(';
        }
    }

    exp=exp.join("");
    var postfix = infixToPostfix(exp); 

    // Reverse postfix 
    var prefix = postfix.split("").reverse().join("");

    return prefix;
}

var exp = "(a-b/c)*(a/k-l)";
var result = infixToPrefix(exp);
console.log(result);