var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    insertAt(element, index) {
        var node = new Node(element);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            var count = 0;
            var current = this.head;
            while (count < index) {
                count++;
                current = current.next;
            }

            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    remove(element) {
        var current = this.head;
        var previous = null;
        while (current) {
            if (current.element === element) {
                if (previous === null) {
                    this.head = current.next;
                }
                else {
                    previous.next = current.next;
                }
                this.size--;
                break;
            }
            previous = current;
            current = current.next;
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            var count = 0;
            var current = this.head;
            var previous = null;
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }
}

var linkedList = new List();
linkedList.add(10);
linkedList.add(200);
linkedList.add(30);

linkedList.list();
linkedList.remove(10);
linkedList.list();
linkedList.insertAt(101, 0);
linkedList.insertAt(102, 2);
linkedList.list();
linkedList.removeAt(1);
linkedList.list();