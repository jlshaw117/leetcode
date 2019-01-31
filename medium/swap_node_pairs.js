var swapPairs = function (head) {
    let dummy = new ListNode(null);
    if (head) {
        dummy.next = head;
        let preNode = dummy;
        let currNode = head;
        let nextNode = head.next;
        
    
        while (currNode && currNode.next) {
            currNode.next = nextNode.next;
            nextNode.next = currNode;
            preNode.next = nextNode;
            preNode = currNode;
            currNode = currNode.next;
            nextNode = currNode ? currNode.next : null;
        }
    }
    return dummy.next;
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

swapPairs(head);