
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    let rem = 0;
    let preNode = new ListNode(0);
    let node = preNode;
    while (l1 || l2 || rem) {
        num1 = l1 ? l1.val : 0;
        num2 = l2 ? l2.val : 0;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

        sum = num1 + num2 + rem;
        newNode = new ListNode(sum % 10);
        node.next = newNode;
        node = newNode;
        rem = sum >= 10 ? 1 : 0;
    }
    return preNode.next;
};