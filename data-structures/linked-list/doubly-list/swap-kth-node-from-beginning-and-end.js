var { LinkedList } = require('./linked-list');

function swap(list, k) {
    var n = list.size;
    if (k > n)
        return;

    // If x (kth node from start) and y(kth node from end) are same  
    if (2 * k - 1 == n)
        return;

    // Find the kth node from beginning of linked list. 
    // We also find previous of kth node because we need to update next pointer of the previous.  
    var x = list.head;
    var x_prev = null;
    for (var i = 1; i < k; i++) {
        x_prev = x;
        x = x.next;
    }

    // Similarly, find the kth node from end and its previous. kth node from end is (n-k+1)th node from beginning  
    var y = list.tail;
    var y_prev = null;

    for (var i = 1; i < k; i++) {
        y_prev = y;
        y = y.prev;
    }

    // if swap node is not head
    if (x_prev && y_prev) {
        x_prev.next = y;
        y_prev.prev = x;
    }

    // check if swap nodee is not adjacent
    if (x.next != y && y.prev != x) {
        // check if swap node is not last element
        if (x.next != null && y.prev != null) {
            x.next.prev = y;
            y.prev.next = x;
        }

        var temp = x.next;
        x.next = y.next;
        y.next = temp;

        var temp = x.prev;
        x.prev = y.prev;
        y.prev = temp;
    }
    else {
        x.next = y.next;
        y.next = x;

        y.prev = x.prev;
        x.prev = y;
    }

    // Change head pointers when k is 1 or n  
    if (k == 1 || k == n) {
        var t = list.head;
        list.head = list.tail;
        list.tail = t;
    }

    return list;
}

var linkedList1 = new LinkedList();
linkedList1.add(100);
linkedList1.add(200);
linkedList1.add(300);
linkedList1.add(400);
linkedList1.add(500);

linkedList1.list();
swap(linkedList1, 2);
linkedList1.list();