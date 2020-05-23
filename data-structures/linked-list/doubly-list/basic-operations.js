var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    insertBegining(data) {
        var node = new Node(data);
        if (this.head === null) {
            node.next = node;
            this.head = node;
            this.tail = node;
        }
        else {
            var current = this.head;

            node.next = current;
            current.prev = node;

            this.head = node;
        }
        this.size++;
    }

    insertEnd(data) {
        var node = new Node(data);
        if (this.head === null) {
            node.next = node;
            this.head = node;
        }
        else {
            var current = this.tail;

            node.prev = current;
            current.next = node;

            this.tail = node;
        }
        this.size++;
    }

    insertAfter(item, data) {
        var node = new Node(data);
        if (this.head === null) {
            node.next = node;
            this.head = node;
            this.tail = node;
        }
        else {
            var next = this.head;
            var prev = this.tail;
            var current = null;

            while (next && prev) {
                if (next.data === item) {
                    current = next;
                    break;
                }
                else if (prev.data === item) {
                    current = prev;
                    break;
                }
                next = next.next;
                prev = prev.prev;
            }

            node.next = current.next;
            node.prev = current;

            current.next.prev = node;
            current.next = node;
        }
        this.size++;
    }

    remove(data) {
        var next = this.head;
        var prev = this.tail;
        var current = null;

        while (next && prev) {
            if (next.data === data) {
                current = next;
                break;
            }
            else if (prev.data === data) {
                current = prev;
                break;
            }
            next = next.next;
            prev = prev.prev;
        }

        if (current.prev === null) {
            this.head = current.next;
            current.next.prev = null;
        }
        else if (current.next === null) {
            this.tail = current.prev;
            current.prev.next = null;
        }
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
    }
}

var linkedList1 = new List();
linkedList1.add(500);
linkedList1.add(600);
linkedList1.add(700);
linkedList1.add(800);
linkedList1.insertBegining(9090);
linkedList1.insertEnd(8080);

linkedList1.list();

linkedList1.insertAfter(700, 7070);

linkedList1.remove(600);
linkedList1.list();