class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    add(element) {
        var node = new Node(element);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    list() {
        var current = this.head;
        console.log('*****list*****');
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList
}