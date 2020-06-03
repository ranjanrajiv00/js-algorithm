class Stack {
    constructor(size) {
        this.top = -1;
        this.max = size;
        this.items = [];
    }

    push(item) {
        if (this.top === this.max - 1) {
            console.log('Stack overflow');
            return;
        }
        else {
            this.items[++this.top] = item;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        else {
            return this.items[this.top--];
        }
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        else {
            return this.items[this.top];
        }
    }

    list() {
        var top = this.top;
        console.log('***List***');
        
        while (top >= 0) {
            console.log(this.items[top--]);
        }
    }
}

module.exports = {
    Stack: Stack
}