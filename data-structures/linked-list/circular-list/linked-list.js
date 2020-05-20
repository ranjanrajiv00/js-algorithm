class Node {
    constructor(data) {
        this.data = data;
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
            this.tail.next = node;
            this.tail = node;
        }
        node.next = this.head;
        this.size++;
    }

    list() {
        var current = this.head;
        console.log('*****list*****');

        do {
            console.log(current.data);
            current = current.next;
        } while (current != this.head);
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList
}