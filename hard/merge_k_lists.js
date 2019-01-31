// const mergeTwoLists = (l1, l2) => {
//     let dummy = new ListNode(null);
//     let curr = dummy;
//     let nextNode;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             nextNode = l1;
//             l1 = l1.next;
//             nextNode.next = null;
//             curr.next = nextNode;
//             curr = curr.next;
//         } else {
//             nextNode = l2;
//             l2 = l2.next;
//             nextNode.next = null;
//             curr.next = nextNode;
//             curr = curr.next;
//         }
//     }

//     curr.next = l1 ? l1 : l2;
//     return dummy.next;
// };

// const mergeKLists = (lists) => {
//     if (lists.length === 0) return new ListNode().next;
//     let result = lists[0];
//     for (let idx = 1; idx < lists.length; idx++) {
//         result = mergeTwoLists(result, lists[idx]);
//     }
//     return result;
// };

// Different approach

// const mergeKLists = (lists) => {
//     // lists.forEach((el, idx) => {
//     //     if (!el) lists.splice(idx, 1);
//     // });
//     for (let idx = 0; idx < lists.length; idx++) {
//         if (!lists[idx]) {
//             lists.splice(idx, 1);
//             idx--;
//         }
//     }
//     let result = new ListNode(null);
//     if (lists.length === 0) return result.next;
//     let currNode = result;
//     while (lists.length > 1) {
//         let min = lists[0];
//         let idx = 0;
//         lists.forEach((el, i) => {
//             if (el.val < min.val) {
//                 min = el;
//                 idx = i;
//             }
//         });
//         currNode.next = min;
//         currNode = currNode.next;

//         if (lists[idx].next) {
//             lists[idx] = lists[idx].next;
//         } else {
//             lists.splice(idx, 1);
//         }
//     }
//     currNode.next = lists[0];
//     return result.next;
// };

// Optimized



function ListNode(val) {
    this.val = val;
    this.next = null;
}

let dummy = new ListNode(null);
let head = new ListNode(0);
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3;
let node4;
let node5;
let node6;
let node7;
let node8;
node1.next = node2;
head.next = node1;
let l1 = head;


head = new ListNode(-10);
node1 = new ListNode(-8);
node2 = new ListNode(-5);
node3 = new ListNode(-4);
let l2 = head;
let l3 = dummy.next;
let l4 = dummy.next;

let l5 = new ListNode(-3);

head = new ListNode(-10);
node1 = new ListNode(-9);
node2 = new ListNode(-6);
node3 = new ListNode(-4);
node4 = new ListNode(-3);
node5 = new ListNode(-2);
node6 = new ListNode(-2);
node7 = new ListNode(-1);
node8 = new ListNode(2);

node7.next = node8;
node6.next = node7;
node5.next = node6;
node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;
head.next = node1;

let l6 = head;

head = new ListNode(-9);
node1 = new ListNode(-9);
node2 = new ListNode(-2);
node3 = new ListNode(-1);
node4 = new ListNode(0);
node5 = new ListNode(1);

node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;
head.next = node1;

let l7 = head;

head = new ListNode(-9);
node1 = new ListNode(-4);
node2 = new ListNode(-3);
node3 = new ListNode(-2);
node4 = new ListNode(2);
node5 = new ListNode(2);
node6 = new ListNode(3);
node7 = new ListNode(3);
node8 = new ListNode(4);

node7.next = node8;
node6.next = node7;
node5.next = node6;
node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;
head.next = node1;

let l8 = head;

mergeKLists([l1, l2, l3, l4, l5, l6, l7, l8]);