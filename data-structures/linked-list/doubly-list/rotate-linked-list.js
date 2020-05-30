var { LinkedList } = require('./linked-list');

function rotate(list, n) {
    var current = list.head;
    while (current && n > 0) {
        current = current.next;
        n--;
    }

    if (current) {
        var head = list.head;
        var tail = list.tail;

        head.prev = tail;
        tail.next = head;

        list.head = current;
        list.tail = current.prev;

        current.prev.next = null;
        current.prev = null;
    }
}

var linkedList1 = new LinkedList();
linkedList1.add(100);
linkedList1.add(200);
linkedList1.add(300);
linkedList1.add(400);
linkedList1.add(500);

linkedList1.list();
rotate(linkedList1, 2);
linkedList1.list();