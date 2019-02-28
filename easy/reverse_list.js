// Recursive
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

// Iterative
const reverseList = (head) => {
    let currNode = head;
    let preNode = null;
    let nextNode;

    while (currNode) {
        nextNode = currNode.next;
        currNode.next = preNode;
        preNode = currNode;
        currNode = nextNode;
    }

    return preNode;
};