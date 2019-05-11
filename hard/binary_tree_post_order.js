class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Recursive
// const postorderTraversal = (root) => {
//     if (!root) return [];
//     return postorderTraversal(root.left).concat(postorderTraversal(root.right), [root.val]);
// };

// Iterative

const postorderTraversal = (root) => {
    if (!root) return [];
    let stack = [root];
    let result = [];
    while (stack.length) {
        let node = stack.pop();
        result.unshift(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result;
};

let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

root.right = node2;
node2.left = node3;

console.log(postorderTraversal(root));