const removeNthFromEnd = (head, n) => {
    let count = 0;
    let curr = head;

    while (curr.next) {
        count ++;
        curr = curr.next;
    }

    curr = head;

    for (let idx = 0; idx < count - n - 1; idx++) {
       curr = curr.next; 
    }

    curr.next = curr.next.next;
    return head;
};