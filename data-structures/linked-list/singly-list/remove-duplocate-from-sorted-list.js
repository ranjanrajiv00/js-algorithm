var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    removeDuplicate() {
        var current = this.head;

        while (current.next != null) {
            if (current.data === current.next.data) {
                var next = current.next.next;
                current.next = next;
            }
            current = current.next;
        }
    }
}

var linkedList = new List();
linkedList.add(100);
linkedList.add(200);
linkedList.add(200);
linkedList.add(200);
linkedList.add(400);
linkedList.add(400);
linkedList.add(500);

linkedList.list();
linkedList.removeDuplicate();
linkedList.list();