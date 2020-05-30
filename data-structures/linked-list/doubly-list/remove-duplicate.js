var { LinkedList } = require('./linked-list');

function deleteNode(list, current) {
    if (current.prev === null) {
        list.head = current.next;
        current.next.prev = null;
    }
    else if (current.next === null) {
        list.tail = current.prev;
        current.prev.next = null;
    }
    else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }
}

function removeDuplicate(list) {
    var nodeHash = {};

    var next = list.head;
    var prev = list.tail;
    var current = null;

    while (next && prev && next.prev != prev && prev.next != next) {
        if (nodeHash[next.data]) {
            current = next;
            deleteNode(list, current);
        }

        nodeHash[next.data] = 1;

        if (nodeHash[prev.data]) {
            current = prev;
            deleteNode(list, current);
        }

        nodeHash[prev.data] = 1;
        
        if (prev == next)
            break;

        next = next.next;
        prev = prev.prev;
    }

    return list;
}

var linkedList1 = new LinkedList();
linkedList1.add(100);
linkedList1.add(200);
linkedList1.add(200);
linkedList1.add(600);
linkedList1.add(500);

linkedList1.list();
removeDuplicate(linkedList1);
linkedList1.list();