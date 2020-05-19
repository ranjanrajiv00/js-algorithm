var { LinkedList } = require('./linked-list');

function interset(list1, list2) {
    var intersectedList = new LinkedList();
    while (list1 && list2) {
        if (list1.element === list2.element) {
            intersectedList.add(list1.element);
            list1 = list1.next;
            list2 = list2.next;
        }

        else if (list1.element < list2.element) {
            list1 = list1.next;
        }
        else {
            list2 = list2.next;
        }
    }

    return intersectedList;
}

var linkedList1 = new LinkedList();
linkedList1.add(100);
linkedList1.add(200);
linkedList1.add(300);
linkedList1.add(400);
linkedList1.add(500);
linkedList1.add(600);
linkedList1.add(700);


var linkedList2 = new LinkedList();
linkedList2.add(100);
linkedList2.add(300);
linkedList2.add(500);
linkedList2.add(700);
linkedList2.add(900);

var intersectedList = interset(linkedList1.head, linkedList2.head);
intersectedList.list();