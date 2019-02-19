const copyRandomList = (head) => {
    if (!head) return null;
    const map = {};

    let curr = head;

    while (curr) {
        map[curr.label] = new RandomListNode(curr.label);
        curr = curr.next;
    }

    let result = map[head.label];

    curr = head;
    let newCurr = result;

    while (curr) {
        if (curr.next) {
            newCurr.next = map[curr.next.label]
        }
        if (curr.random) newCurr.random = map[curr.random.label];

        curr = curr.next;
        newCurr = newCurr.next;
    }

    return result;
};