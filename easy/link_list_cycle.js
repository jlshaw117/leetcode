const hasCycle = (head) => {
    let slow = head;
    let fast = head;

    while (fast) {
        slow = slow.next;
        
        if (fast.next) {
            fast = fast.next.next;
        } else {
            fast = null;
        }
        if (fast === slow) return true;
    }

    return false;
}; 