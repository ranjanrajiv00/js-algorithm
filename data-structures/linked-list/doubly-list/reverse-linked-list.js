var { LinkedList } = require('./linked-list');

function reverse(list) {
    var current = list.head;
    var temp = null;
    
    while (current != null) {
        if (current == list.head) {
            list.tail = current;
        }
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }

    list.head = temp.prev;
    return list;
}

var linkedList1 = new LinkedList();
linkedList1.add(500);
linkedList1.add(600);
linkedList1.add(700);
linkedList1.add(800);

linkedList1.list();
reverse(linkedList1);
linkedList1.list();