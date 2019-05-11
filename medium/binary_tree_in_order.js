// Recursive Solution
// const inorderTraversal = (root) => {
//     if (!root) return [];
//     return inorderTraversal(root.left).concat([root.val], inorderTraversal(root.right));
// };

// Iterative Solution
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const inorderTraversal = (root) => {
    let stack = [];
    let node = root;
    let result = [];
    if (node.left) {
        while(node) {
            stack.push(node);
            node = node.left;
        } 
    } else {
        stack.push(node);
    }
    

    while (stack.length) {
        let curr = stack.pop();
        result.push(curr.val);
        if (curr.right) {
            node = curr.right;
            while (node) {
                stack.push(node);
                node = node.left;
            }
        }
    }
    return result;
};

let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

root.left = node2;
// node2.left = node3;

console.log(inorderTraversal(root));