var { LinkedList } = require('./linked-list');

function hasLoop(head) {
    var slow = head, fast = head, isFound = false;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            return true;
        }
    }

    return isFound;
}

var linkedList1 = new LinkedList();
linkedList1.add(100);
linkedList1.add(200);
linkedList1.add(300);
linkedList1.add(400);
linkedList1.add(500);

linkedList1.head.next.next.next.next = linkedList1.head.next;

var found = hasLoop(linkedList1.head);

console.log(found);