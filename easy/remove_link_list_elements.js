const removeElements = (root, val) => {
    while (root && root.val === val) {
        root = root.next;
    }
    let curr = root;
    while (curr && curr.next) {
        while (curr.next && curr.next.val === val) {
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    return root;
};