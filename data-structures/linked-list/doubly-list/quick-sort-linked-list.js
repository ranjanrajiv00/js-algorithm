var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    partition(l, h) {
        // set pivot as h element  
        var pivot = h.data;

        // similar to i = l-1 for array implementation  
        var i = l.prev;
        var temp;

        // Similar to "for (int j = l; j <= h- 1; j++)"  
        for (var j = l; j != h; j = j.next)
        {
            if (j.data <= pivot) {
                // Similar to i++ for array  
                i = (i == null) ? l : i.next;
                temp = i.data;
                i.data = j.data;
                j.data = temp;
            }
        }

        i = (i == null) ? l : i.next; // Similar to i++  
        temp = i.data;
        i.data = h.data;
        h.data = temp;
        return i;
    }

    /* A recursive implementation of quicksort for linked list */
    sort(l, h) {
        if (h != null && l != h && l != h.next) {
            var pi = this.partition(l, h);
            this.sort(l, pi.prev);
            this.sort(pi.next, h);
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
linkedList1.sort(linkedList1.head, linkedList1.tail);
linkedList1.list();