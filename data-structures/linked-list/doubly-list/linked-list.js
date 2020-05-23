class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    add(data) {
        var node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    list() {
        var current = this.head;
        console.log('*****list*****');
        while (current) {
            console.log(current.data);
            current = current.next;
        }

        current = this.tail;
        console.log('*****list*****');
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList
}