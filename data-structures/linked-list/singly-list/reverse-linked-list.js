var { LinkedList } = require('./linked-list');

function reverse(head) {
    var prev = null, next = null, current = head;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    return prev;
}

var linkedList1 = new LinkedList();
linkedList1.add(100);
linkedList1.add(200);
linkedList1.add(300);
linkedList1.add(400);
linkedList1.add(500);
linkedList1.add(600);
linkedList1.add(700);

linkedList1.list();

var reversedPointer = reverse(linkedList1.head);

var reversedList = new LinkedList();
reversedList.head = reversedPointer;

reversedList.list();