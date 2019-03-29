function ListNode(val) {
    this.val = val;
    this.next = null;
}

const oddEvenList = (root) => {
    let evenList = new ListNode(null);
    let result = new ListNode(null);

    let currEven = evenList;
    let currOdd = result;
    let curr = root;
    let pre;
    let i = 1;

    while (curr) {
        if (i % 2) {
            currOdd.next = curr;
            currOdd = curr;
            pre = curr;
            curr = curr.next;
            pre.next = null;
        } else {
            currEven.next = curr;
            currEven = curr;
            pre = curr;
            curr = curr.next;
            pre.next = null;
        }
        i++;
    }
    currOdd.next = evenList.next;

    return result.next;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(oddEvenList(node1));
