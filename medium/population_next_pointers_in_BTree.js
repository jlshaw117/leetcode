// var connect = function (root) {
//     if (!root) return root;
//     let queue = [root];
//     while (queue.length) {
//         let levelCount = queue.length;
//         for (let i = 0; i < levelCount; i++) {
//             let currNode = queue.shift();
//             if (currNode.left) queue.push(currNode.left);
//             if (currNode.right) queue.push(currNode.right);
//             if (i === levelCount - 1) continue;
//             currNode.next = queue[0];
//         }
//     }
//     return root;
// };
// recursive

const connect = (root) => {
    if (!root || root.left) return root;

    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;

    connect(root.left);
    connect(root.right);

    return root;
};