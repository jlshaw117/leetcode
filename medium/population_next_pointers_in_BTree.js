var connect = function (root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length) {
        let levelCount = queue.length;
        for (let i = 0; i < levelCount; i++) {
            let currNode = queue.shift();
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
            if (i === levelCount - 1) continue;
            currNode.next = queue[0];
        }
    }
    return root;
};