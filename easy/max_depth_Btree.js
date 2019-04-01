const maxDepth = (head) => {
    let result = 0;

    rec = (root, depth) => {
        if (!root) {
            if (depth > result) result = depth;
            return;
        }
        rec(root.left, depth + 1);
        rec(root.right, depth + 1);
    };
    rec(head, 0);
    return result;
};