class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BSTIterator {
    constructor(root) {
        const inOrder = (node) => {
            if (!node) return [];
            let left = inOrder(node.left);
            let right = inOrder(node.right);
            return left.concat([node.val], right);
        };
        this.order = inOrder(root);
    }

    next() {
        return this.order.shift();
    }

    hasNext() {
        return this.order.length > 0;
    }
}

let root = new Node(7);
let node1 = new Node(3);
let node2 = new Node(15);
let node3 = new Node(9);
let node4 = new Node(20);

root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

let iter = new BSTIterator(root);

console.log(iter.next());    // return 3
console.log(iter.next());    // return 7
console.log(iter.hasNext()); // return true
console.log(iter.next());    // return 9
console.log(iter.hasNext()); // return true
console.log(iter.next());    // return 15
console.log(iter.hasNext()); // return true
console.log(iter.next());    // return 20
console.log(iter.hasNext()); // return false