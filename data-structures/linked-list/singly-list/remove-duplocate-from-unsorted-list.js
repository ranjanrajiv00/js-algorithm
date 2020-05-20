var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    removeDuplicate() {
        var current = this.head;
        var hashSet = {};
        var prev = null;
        
        while (current != null) {
            if (hashSet[current.data]) {
                prev.next = current.next;
                prev = current.next;
            }
            else {
                hashSet[current.data] = true;
                prev = current;
            }
            current = current.next;
        }
    }
}

var linkedList = new List();
linkedList.add(300);
linkedList.add(500);
linkedList.add(100);
linkedList.add(900);
linkedList.add(300);
linkedList.add(800);
linkedList.add(300);

linkedList.list();
linkedList.removeDuplicate();
linkedList.list();