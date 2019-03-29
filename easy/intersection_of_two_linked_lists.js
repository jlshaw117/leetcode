const getIntersectionNode = (listA, listB) => {
    let listNodes = new Set();
    let curr = listA;
    while (curr) {
        listNodes.add(curr);
        curr = curr.next;
    }

    curr = listB;

    while (curr) {
        if (listNodes.has(curr)) return curr;
        curr = curr.next;
    }

    return null;
};