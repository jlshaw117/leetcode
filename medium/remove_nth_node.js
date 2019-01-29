// Brute Force
// const removeNthFromEnd = (head, n) => {
//     let count = 1;
//     let curr = head;

//     while (curr.next) {
//         count++;
//         curr = curr.next;
//     }
//     if (count === n) {
//         return head.next
//     }
//     curr = head;

//     for (let idx = 0; idx < count - n - 1; idx++) {
//         curr = curr.next;
//     }

//     if (curr.next) {
//         curr.next = curr.next.next;
//     } else {
//         curr.next = null;
//     }
//     return head;
// };

// Optimized

const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(null);
    dummy.next = head;
    let currNode = dummy;
    let endNode = dummy;

    for (let idx = 0; idx < n; idx++) {
        endNode = endNode.next;
    }

    while (endNode.next) {
        currNode = currNode.next;
        endNode = endNode.next;
    }

    currNode.next = currNode.next.next;

    return dummy.next;
};

