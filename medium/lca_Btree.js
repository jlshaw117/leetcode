function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
}

// const lowestCommonAncestor = (root, p, q) => {
    
//     const rec = (root) => {
//         if (!root) return [[],[]];

//         let [inOrderLeft, preOrderLeft] = rec(root.left);
//         let [inOrderRight, preOrderRight] = rec(root.right);

//         let inOrder = inOrderLeft.concat([root.val], inOrderRight);
//         let preOrder = [root.val].concat(preOrderLeft, preOrderRight);

//         return [inOrder, preOrder];
//     };
//     let [inOrder, preOrder] = rec(root);
//     let pIdx = inOrder.indexOf(p);
//     let qIdx = inOrder.indexOf(q);
//     for (let i = 0; i < preOrder.length; i++) {
//         let rootVal = preOrder[i];
//         let rootIdx = inOrder.indexOf(rootVal);
//         if ((pIdx < rootIdx && qIdx > rootIdx) ||
//             (pIdx > rootIdx && qIdx < rootIdx) ||
//             (pIdx === rootIdx || qIdx === rootIdx)
//         ) {
//             return rootVal;
//         }
//     }
// };

const lowestCommonAncestor = (root, p, q) => {
    if (!root) return false;

    let left = lowestCommonAncestor(root.left, p, q);
    if (typeof (left) === 'object') return left;
    let right = lowestCommonAncestor(root.right, p, q);
    if (typeof (right) === 'object') return right;
    if ((left && right) || ((root === p || root === q) && (left || right))) {
        return root;
    } else if (root === p || root === q) {
        return true;
    } else {
        return (left || right);
    }
};

let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);

node3.left = node5;
node3.right = node1;

node5.left = node6;
node5.right = node2;

node1.left = node0;
node1.right = node8;

node2.left = node7;
node2.right = node4;

console.log(lowestCommonAncestor(node3, 5, 4));