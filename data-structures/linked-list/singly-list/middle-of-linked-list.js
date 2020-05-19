var { Node, LinkedList } = require('./linked-list');

class List extends LinkedList {
    constructor() {
        super();
    }

    middleOf() {
        var slow = this.head;
        var fast = this.head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log('Middle of list - ', slow.element);
    }
}

var linkedList = new List();
linkedList.add(100);
linkedList.add(200);
linkedList.add(300);
linkedList.add(400);
linkedList.add(500);

linkedList.middleOf();