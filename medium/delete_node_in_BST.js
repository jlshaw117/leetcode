const findMinNode = (root) => {
    while (root && root.left) {
        root = root.left;
    }
    return root;
};

const deleteNode = (root, key) => {
    if (!root) return root;
    if (root.val === key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let minNode = findMinNode(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, root.val);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }
    return root;
};