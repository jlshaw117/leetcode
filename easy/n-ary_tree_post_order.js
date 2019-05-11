class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

const postorder = (root) => {
    if (!root) return [];
    let result = [];
    for (let child of root.children) {
        result.push(...postorder(child));
    }
    result.push(root.val);
    return result;
};

let root = new Node(1);
let node1 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(4);
let node4 = new Node(5);
let node5 = new Node(6);

root.children.push(node2, node1, node3);

node2.children.push(node4,node5);

console.log(postorder(root));