var { LinkedList } = require('./linked-list');

function isPalindrome(head) {
    var current = head, slow_ptr = head, fast_ptr = head, palindrome = true;
    while (slow_ptr && fast_ptr && fast_ptr.next) {
        slow_ptr = slow_ptr.next;
        fast_ptr = fast_ptr.next.next;
    }

    /* fast_ptr would become NULL when there are even elements in list.  
        And not NULL for odd elements. We need to skip the middle node  
        for odd case and store it somewhere so that we can restore the 
        original list*/
    if (fast_ptr != null) {
        slow_ptr = slow_ptr.next;
    }

    var second_half = slow_ptr;
    second_half = reverse(second_half);

    while (second_half) {
        if (current.data != second_half.data) {
            palindrome = false;
        }
        current = current.next;
        second_half = second_half.next;
    }
    return palindrome;
}

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
linkedList1.add(200);
linkedList1.add(900);

var palindrome = isPalindrome(linkedList1.head);

console.log('Is Palindrome ', palindrome);