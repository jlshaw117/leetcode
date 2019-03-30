const deleteDuplicates = (root) => {
    let nodes = new Set();
    let dups = new Set();
    let curr = root;
    while (curr) {
        if (nodes.has(curr.val)) {
            dups.add(curr.val);
        } else {
            nodes.add(curr.val);
        }
    }

    let result = new ListNode(null);
    let currResult = result;
    curr = root;
    while (curr) {
        if (!dups.has(curr.val)) {
            currResult.next = new ListNode(curr.val);
            currResult = currResult.next;
        }
        curr = curr.next;
    }

    return result.next;
};