var countUnivalSubtrees = function (root) {
    let count = 0;

    const rec = (node) => {
        if (!node) return true;
        let leftTree = rec(node.left);
        let rightTree = rec(node.right);
        if (leftTree && rightTree) {
            let left = node.left ? node.left.val : node.val;
            let right = node.right ? node.right.val : node.val;
            if (left === right && left === node.val) {
                count++;
                return true
            }
        }
        return false;
    }

    rec(root);
    return count;
};