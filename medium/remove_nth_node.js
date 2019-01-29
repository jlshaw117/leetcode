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
const helper = (head, n) => {
    for (let i = 1; i < n; i++) {
        if (!head.next) return false;
    }
    return true;
};

const removeNthFromEnd = (head, n) => {
    if (!head.next && n === 1) return head.next;
    let curr = head;
    while (curr.next) {
        if (!helper(curr.next, n)) {
            curr.next = curr.next.next;
            break;
        }
        curr = curr.next;
    }
    return head;
};

