var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    // split a doubly linked list (DLL) into 2 DLLs of half sizes  
    split(head) {
        var fast = head, slow = head;

        while (fast.next != null && fast.next.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        var temp = slow.next;
        slow.next = null;
        return temp;
    }

    sort(node) {
        if (node == null || node.next == null) {
            return node;
        }
        var second = this.split(node);

        // recur for left and right halves  
        node = this.sort(node);
        second = this.sort(second);

        // merge the two sorted halves  
        return this.merge(node, second);
    }

    // merge two linked lists  
    merge(first, second) {
        // If first linked list is empty  
        if (first == null) {
            return second;
        }

        // If second linked list is empty  
        if (second == null) {
            return first;
        }

        // Pick the smaller value  
        if (first.data < second.data) {
            first.next = this.merge(first.next, second);
            first.next.prev = first;
            first.prev = null;
            return first;
        }
        else {
            second.next = this.merge(first, second.next);
            second.next.prev = second;
            second.prev = null;
            return second;
        }
    }
}

var linkedList1 = new List();
linkedList1.add(5);
linkedList1.add(20);
linkedList1.add(4);
linkedList1.add(3);
linkedList1.add(30);

linkedList1.list();
linkedList1.head = linkedList1.sort(linkedList1.head);
linkedList1.list();