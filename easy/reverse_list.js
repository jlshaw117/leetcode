// const reverseList = (head) => {
//     let result = new ListNode(null);
//     if (!head) return result.next;
//     const rec = (node) => {
//         if (node.next === null) {
//             result.next = node;
//             return node;
//         }

//         rec(node.next).next = node;
//         return node;
//     };

//     rec(head).next = null;
//     return result.next;
// };