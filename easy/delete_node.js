const deleteNode = (node) => {
    let curr = node;
    while (curr.next.next) {
        curr.val = curr.next.val;
        curr = curr.next;
    }
    curr.val = curr.next.val
    curr.next = null
};