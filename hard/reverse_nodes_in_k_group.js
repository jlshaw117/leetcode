const reverseKGroup = (head, k) => {
    let preNode = new ListNode(null);
    let currNode = preNode;
    let arr = [];

    while (head) {
        arr.push(head);
        head = head.next;
        if (arr.length === k) {
            for (let idx = 0; idx < k; idx++) {
                currNode.next = arr.pop();
                currNode = currNode.next;
            }
        }
    }
    for (let idx = 0; idx < arr.length; idx++) {
        currNode.next = arr[idx];
        currNode = currNode.next;
    }
    currNode.next = null;
    return preNode.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);
let node5 = new ListNode(6);

node4.next = node5;
node3.next = node4;
node2.next = node3;
node1.next = node2;
head.next = node1;

// console.log(reverseList(head, 6));
reverseKGroup(head, 3);