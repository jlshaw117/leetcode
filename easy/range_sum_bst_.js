const rangeSumBST = (root, min, max) => {
    let sum = 0;

    const rec = (currNode) => {
        if (!currNode) return;
        if (currNode.val >= min && currNode.val <= max) {
            sum += currNode.val;
            rec(currNode.left);
            rec(currNode.right);
        } else if (currNode.val < min) {
            rec(currNode.right);
        } else if (currNode.val > max) {
            rec(currNode.leftr);
        }
        return;
    };

    rec(root);
    return sum;
};