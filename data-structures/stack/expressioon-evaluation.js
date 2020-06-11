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

function compute(a, b, op) {
    switch (op) {
        case '+': return +a + +b;
        case '-': return +a - +b;
        case '*': return +a * +b;
        case '/': return +a / +b;
    }
}

function evaluate(exp) {
    var operators = new Stack(100);
    var values = new Stack(100);
    var length = exp.length;

    for (var i = 0; i < length; i++) {
        if (exp[i] == ' ') {
            continue;
        }
        if (!isNaN(exp[i])) {
            var val = '';

            // There may be more than one digits in number. 
            while (i < length && !isNaN(exp[i])) {
                val += exp[i]
                i++;
            }
            i--;
            values.push(val);
        }

        // If the scanned character is an ‘(‘, push it to the stack. 
        else if (exp[i] === '(') {
            operators.push('(');
        }

        // If the scanned character is an ‘)’, pop and to result string from the stack 
        // until an ‘(‘ is encountered.
        else if (exp[i] === ')') {
            while (operators.peek() != '(') {
                var operand1 = values.peek();
                values.pop();

                var operand2 = values.peek();
                values.pop();

                var operator = operators.peek();
                operators.pop();

                values.push(compute(operand1, operand2, operator));
            }
            operators.pop();
        }

        // If an operator is scanned 
        else {
            while (!operators.isEmpty() && precedence(exp[i]) <= precedence(operators.peek())) {
                var operand1 = values.peek();
                values.pop();

                var operand2 = values.peek();
                values.pop();

                var operator = operators.peek();
                operators.pop();

                values.push(compute(operand1, operand2, operator));
            }
            operators.push(exp[i]);
        }
    }

    while (!operators.isEmpty()) {
        var operand1 = values.peek();
        values.pop();

        var operand2 = values.peek();
        values.pop();

        var operator = operators.peek();
        operators.pop();

        values.push(compute(operand1, operand2, operator));
    }
    return values.peek();
}

console.log(evaluate("10 + 2 * 6"));