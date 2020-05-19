var { LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    swap(a, b) {
        var current = this.head;
        var node1, node2;
        while (current.next != null) {
            if (current.next.element === a) {
                node1 = current;
            }
            if (current.next.element === b) {
                node2 = current;
            }
            current = current.next;
        }

        var temp = node1.next;  
        node1.next = node2.next;  
        node2.next = temp; 

        temp = node1.next.next;  
        node1.next.next = node2.next.next;  
        node2.next.next = temp;
    }
}

var linkedList = new List();
linkedList.add(100);
linkedList.add(200);
linkedList.add(300);
linkedList.add(400);
linkedList.add(500);
linkedList.add(600);
linkedList.add(700);

linkedList.list();
linkedList.swap(300, 500);
linkedList.list();