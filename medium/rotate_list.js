const rotate1Right = (head) => {
    let curr = head;
    while (curr.next.next) {
        curr = curr.next;
    }
    let newHead = curr.next;
    curr.next = null;
    newHead.next = head;
    return newHead;
};

const rotateRight = (head,k) => {
    let len = 0;
    let curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    k = k % len;
    while (k) {
        head = rotate1Right(head);
        k--;
    }
    return head;
};