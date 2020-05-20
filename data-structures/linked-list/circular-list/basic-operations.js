var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    insertAfter(item, data) {
        var node = new Node(data);
        if (this.head === null) {
            node.next = node;
            this.head = node;
        }
        else {
            var current = this.head;
            do {
                if (current.data === item) {
                    break;
                }
                current = current.next;
            } while (current != this.head);

            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    remove(data) {
        var current = this.head;
        var previous = null;
        do {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                    this.tail.next = current.next;
                }
                else {
                    previous.next = current.next;
                }
                this.size--;
                break;
            }
            previous = current;
            current = current.next;
        } while (current != this.head);
    }
}

var linkedList = new List();
linkedList.add(500);
linkedList.insertAfter(500, 600);
linkedList.insertAfter(600, 700);
linkedList.list();


var linkedList1 = new List();
linkedList1.add(500);
linkedList1.add(600);
linkedList1.add(700);
linkedList1.add(800);
linkedList1.remove(700);
linkedList1.list();