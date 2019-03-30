const isCycle = (root) => {
    let slow = root;
    let fast = root.next;
    while (slow !== fast) {
        if (!slow || !fast) {
            return false;
        }
        slow = slow.next;
        if (fast === root) return root;
        fast = fast.next;
        if (fast === root) return root;
        fast = fast.next;
    }
    return true;
};

const detectCycle = (head) => {
    let node = head;
    while (node) {
        let cycle = isCycle(node);
        if (!cycle) return null;
        if (cycle === node) return node;
        node = node.next;
    }
};