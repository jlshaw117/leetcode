const removeNthFromEnd = (head, n) => {
    let count = 1;
    let curr = head;

    while (curr.next) {
        count++;
        curr = curr.next;
    }
    if (count === n) {
        return head.next
    }
    curr = head;

    for (let idx = 0; idx < count - n - 1; idx++) {
        curr = curr.next;
    }

    if (curr.next) {
        curr.next = curr.next.next;
    } else {
        curr.next = null;
    }
    return head
};