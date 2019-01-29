const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(null);
    let curr = dummy;
    let nextNode;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            nextNode = l1;
            l1 = l1.next;
            nextNode.next = null;
            curr.next = nextNode;
            curr = curr.next;
        } else {
            nextNode = l2;
            l2 = l2.next;
            nextNode.next = null;
            curr.next = nextNode;
            curr = curr.next;
        }
    }

    curr.next = l1 ? l1 : l2;
    return dummy.next;
};

const mergeKLists = (lists) => {
    if (lists.length === 0) return new ListNode().next;
    let result = lists[0];
    for (let idx = 1; idx < lists.length; idx++) {
        result = mergeTwoLists(result, lists[idx]);
    }
    return result;
};